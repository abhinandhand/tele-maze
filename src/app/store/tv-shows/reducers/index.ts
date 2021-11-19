import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow";
import * as DashboardActions from "../actions/tv-shows.actions";

export const tvShowsStateFeatureKey = 'tv-shows';


export interface IState extends EntityState<TvShow> {
  }

export const adapter: EntityAdapter<TvShow> = createEntityAdapter<TvShow>({
    selectId: (tvShow: TvShow) => tvShow.id
  });

export const initialState: IState = adapter.getInitialState({});

export const tvShowReducer = createReducer(
	initialState,

	on(DashboardActions.loadDashboardInfos, (state, action) => adapter.addMany(action.tvShows, state)),
  on(DashboardActions.clearDashBoardInfo, (state) => adapter.removeAll(state))
);



const {
	selectEntities,
	selectAll
} = adapter.getSelectors();

export const selectState = createFeatureSelector<IState>(tvShowsStateFeatureKey);
export const selectPupilLearningObjectiveInfoEntities = createSelector(selectState, selectEntities);
export const selectPupilLearningObjectiveInfos = createSelector(selectState, selectAll);