import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, switchMap } from "rxjs/operators";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";

@Injectable()
export class DashboardEffects {

  dashboardRouted$ = createEffect(() => this.action$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Dashboard)),
      switchMap(() => this.teleMazeService.getShows().
        pipe(
          switchMap((tvShows) => {
            return [
              loadTvShowInfos({tvShows})
            ]
          })
        ))
      ))

  constructor(
    private action$: Actions,
    private teleMazeService: TeleMazeService,
  ){}
}
