import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { errorWhileFetchingData } from "src/app/shared/components/error/actions/error.actions";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { setLoading } from "src/app/store/loader/actions/loader.actions";
import { addTvShowInfo, clearTvShowInfo, loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";
import { dashboardLoadDataFailure } from "../../dashboard/actions/dashboard.actions";
import { detailLoadDataFailure, detailPageOnDestroy } from "../actions/detail.actions";

@Injectable()
export class DetailEffects {

  detailRouted$ = createEffect(() => this.action$.pipe(
     ofType(ROUTER_NAVIGATED),
     filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Detail)),
     tap(() => this.store.dispatch(setLoading({isLoading: true}))),
      switchMap(() => this.teleMazeService.showDetail(location.pathname.split('/')[2]).
        pipe(
          switchMap((tvShow) => {
            return [
              addTvShowInfo({tvShow})
            ]
          })
        )),
        catchError(() => of(detailLoadDataFailure()))
      ));


  detailLoadDataFailure$ = createEffect(() => this.action$.pipe(
    ofType(detailLoadDataFailure),
    switchMap(() => [errorWhileFetchingData(), setLoading({isLoading: false})])
  ));

  detailPageOnDestroy$ = createEffect(() => this.action$.pipe(
      ofType(detailPageOnDestroy),
      map(() => clearTvShowInfo())
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private teleMazeService: TeleMazeService
  ){}
}
