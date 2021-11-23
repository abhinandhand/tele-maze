import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { errorWhileFetchingData } from "src/app/shared/components/error/actions/error.actions";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import * as TvShowUtils from "src/app/shared/utils/tvshow.utils";
import { setLoading } from "src/app/store/loader/actions/loader.actions";
import { clearTvShowInfo, loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";
import { searchLoadDataFailure, searchPageOnDestroy } from "../actions/search.actions";

@Injectable()
export class SearchEffects {

  searchRouted$ = createEffect(() => this.action$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Search)),
      tap(() => this.store.dispatch(setLoading({isLoading: true}))),
      switchMap(() => this.teleMazeService.search(decodeURI(location.search).split('=')[1]).
        pipe(
          switchMap((response) => {
            const searchResults = TvShowUtils.mapTvShows(response);
            return [
              loadTvShowInfos({tvShows: searchResults}),
              setLoading({isLoading: false}),
            ]
          })
        )),
        catchError((error) => of(searchLoadDataFailure()))
      ));


  searchLoadDataFailure$ = createEffect(() => this.action$.pipe(
    ofType(searchLoadDataFailure),
    switchMap(() => [errorWhileFetchingData(), setLoading({isLoading: false})])
  ));

  searchPageOnDestroy$ = createEffect(() => this.action$.pipe(
    ofType(searchPageOnDestroy),
    map(() => clearTvShowInfo())
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private teleMazeService: TeleMazeService
  ){}


}
