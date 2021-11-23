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
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Family))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectThrillerShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Thriller))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectDramaShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Drama))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectComedyShows = createSelector(
  selectAllTvShows,
    (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Comedy))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectCrimeShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Crime))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectSportsShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Sports))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectMusicShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Music))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectRomanceShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
    [...shows.filter(show => show.genres.includes(Genre.Music))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectScienceFictionShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] =>
     [...shows.filter(show => show.genres.includes(Genre.ScienceFiction))].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectTopRatedShows = createSelector(
  selectAllTvShows,
  (shows: TvShow[]): TvShow[] => [...shows].sort((a,b) => b.rating.average - a.rating.average)
);

export const selectDetailedShow = createSelector(
	selectAllTvShows,
	(shows: TvShow[]): TvShow => shows[0]
);

export const selectDetailedShowWithId = (id: number) => createSelector(
  fromTvShows.selectEntities,
  entities => entities[id]
)

export const selectTvShowSearchResults = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);
