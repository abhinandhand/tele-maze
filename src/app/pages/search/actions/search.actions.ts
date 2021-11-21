import { createAction } from "@ngrx/store";

export const searchLoadDataSuccess = createAction(
  '[Search Page] Search Load Data Success'
)

export const searchLoadDataFailure = createAction(
  '[Search Page] Search Load Data Failure'
)

export const searchPageOnDestroy = createAction(
  '[Search Page] On Leaving the Search Page'
)
