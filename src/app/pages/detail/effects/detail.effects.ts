import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { addTvShowInfo, clearTvShowInfo, loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";
import { detailPageOnDestroy } from "../actions/detail.actions";

@Injectable()
export class DetailEffects {

  detailRouted$ = createEffect(() => this.action$.pipe(
     ofType(ROUTER_NAVIGATED),
     filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Detail)),
      switchMap(() => this.teleMazeService.showDetail(location.pathname.split('/')[2]).
        pipe(
          switchMap((tvShow) => {
            return [
              addTvShowInfo({tvShow})
            ]
          })
        ))
      ));


  detailPageOnDestroy$ = createEffect(() => this.action$.pipe(
      ofType(detailPageOnDestroy),
      map(() => clearTvShowInfo())
  ));

  constructor(
    private action$: Actions,
    private teleMazeService: TeleMazeService,
    private router: Router
  ){}
}
