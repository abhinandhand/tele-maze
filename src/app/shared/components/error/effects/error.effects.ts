import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { errorWhileFetchingData } from "../actions/error.actions";

@Injectable()
export class ErrorEffects {

  navigateToErrorPage$ = createEffect(() => this.action$.pipe(
    ofType(errorWhileFetchingData),
    map(() =>  this.router.navigate([TeleMazeRoutes.NetworkError]))
    ), {dispatch: false})

  constructor(
    private action$: Actions,
    private router: Router
  ){ }

}
