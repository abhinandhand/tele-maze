import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow.model";
import { Genre } from "src/app/shared/shared.enum";
import * as fromTvShows from "./index";

const selectTvShowsState = createFeatureSelector<fromTvShows.TvShowsState>('tv-shows');

export const selectAllTvShows = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);

export const selectFamilyShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Family))
);

export const selectThrillerShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Thriller))
);

export const selectDramaShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Drama))
);

export const selectComedyShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Comedy))
);

export const selectCrimeShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Crime))
);

export const selectSportsShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Sports))
);

export const selectMusicShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Music))
);

export const selectRomanceShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Music))
);

export const selectScienceFictionShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.ScienceFiction))
);

export const selectTopRatedShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => shows
);

export const selectDetailedShow = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);

export const selectDetailedShowWithId = (id: number) => createSelector(
  fromTvShows.selectEntities,
  entities => entities[id]
)

export const selectTvShowSearchResults = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);
