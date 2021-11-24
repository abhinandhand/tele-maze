import { createAction } from "@ngrx/store";

export const dashboardLoadDataSuccess = createAction(
  '[Dashboard Page] Dashboard Load Data Success'
)

export const dashboardLoadDataFailure = createAction(
  '[Dashboard Page] Dashboard Load Data Failure'
)

export const dashboardPageOnDestroy = createAction(
  '[Dashboard Page] On Leaving the Dashboard Page'
);

