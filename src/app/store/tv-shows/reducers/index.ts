import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow";
import * as DashboardActions from "../actions/tv-shows.actions";

export const tvShowsStateFeatureKey = 'tv-shows';


export interface TvShowsState extends EntityState<TvShow> {

  }

export const adapter: EntityAdapter<TvShow> = createEntityAdapter<TvShow>({
    selectId: (tvShow: TvShow) => tvShow.id
  });

export const initialState: TvShowsState = adapter.getInitialState({});

export const tvShowReducer = createReducer(
	initialState,

	on(DashboardActions.loadTvShowInfos, (state, action) => adapter.setAll(action.tvShows, state)),
  on(DashboardActions.addTvShowInfo, (state, action) => adapter.setOne(action.tvShow, state)),
  on(DashboardActions.clearTvShowInfo, (state) => adapter.removeAll(state))
);


export const {
	selectEntities,
	selectAll
} = adapter.getSelectors();
