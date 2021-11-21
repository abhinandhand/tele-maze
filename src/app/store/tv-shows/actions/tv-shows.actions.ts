import { createAction, props } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow.model";

export const loadTvShowInfos = createAction(
  '[TV Shows] Load TV Show Infos',
  props<{tvShows: TvShow[]}>()
);

export const addTvShowInfo = createAction(
  '[TV Show] Add One TV Show Info',
  props<{tvShow: TvShow}>()
);

export const clearTvShowInfo = createAction(
  '[TV Shows] Clear TV Show Infos'
);
