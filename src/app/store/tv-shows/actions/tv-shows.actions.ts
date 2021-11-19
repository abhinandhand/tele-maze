import { createAction, props } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow";

export const loadDashboardInfos = createAction(
  '[Dashboard/Home] Load Dashboard Infos',
  props<{tvShows: TvShow[]}>()
);

export const clearDashBoardInfo = createAction(
  '[Dashboard/Home] Clear Dashboard Infos'
);
