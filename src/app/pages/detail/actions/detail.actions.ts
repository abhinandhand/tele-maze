import { createAction } from "@ngrx/store";

export const detailLoadDataSuccess = createAction(
  '[Detail Page] Detail Load Data Success'
)

export const detailLoadDataFailure = createAction(
  '[Detail Page] Detail Load Data Failure'
)

export const detailPageOnDestroy = createAction(
  '[Detail Page] On Leaving the Detail Page'
)

