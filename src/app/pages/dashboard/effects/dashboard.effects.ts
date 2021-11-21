import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { errorWhileFetchingData } from "src/app/shared/components/error/actions/error.actions";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { setLoading } from "src/app/store/loader/actions/loader.actions";
import { clearTvShowInfo, loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";
import { dashboardLoadDataFailure, dashboardLoadDataSuccess, dashboardPageOnDestroy } from "../actions/dashboard.actions";

@Injectable()
export class DashboardEffects {

  dashboardRouted$ = createEffect(() => this.action$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Dashboard) || location.pathname === '/'),
      tap(() => this.store.dispatch(setLoading({isLoading: true}))),
      switchMap(() => this.teleMazeService.getAllShows().
        pipe(
          switchMap((tvShows) => {
            return [
              loadTvShowInfos({tvShows}),
              setLoading({isLoading: false}),
              dashboardLoadDataSuccess()
            ]
          })
        )),
        catchError(() => of(dashboardLoadDataFailure()))
      ));

  dashboardPageOnDestroy$ = createEffect(() => this.action$.pipe(
    ofType(dashboardPageOnDestroy),
    map(() => clearTvShowInfo())
  ));

  dashboardLoadDataFailure$ = createEffect(() => this.action$.pipe(
    ofType(dashboardLoadDataFailure),
    switchMap(() => [errorWhileFetchingData(), setLoading({isLoading: false})])
  ));



  constructor(
    private action$: Actions,
    private teleMazeService: TeleMazeService,
    private store: Store
  ){}
}
