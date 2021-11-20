import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TvShow } from "src/app/shared/models/tvshow";
import { Genre } from "src/app/shared/shared.enum";
import * as fromTvShows from "./index";

const selectTvShowsState = createFeatureSelector<fromTvShows.TvShowsState>('tv-shows');

export const getAllTvShows = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);

export const getFamilyShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Family))
);

export const getThrillerShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Thriller))
);

export const getDramaShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Drama))
);

export const getComedyShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Comedy))
);

export const getCrimeShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Crime))
);

export const getSportsShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Sports))
);

export const getMusicShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Music))
);

export const getRomanceShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.Music))
);

export const getScienceFictionShows = createSelector(
  getAllTvShows,
  (shows: TvShow[]): TvShow[] => shows.filter(show => show.genres.includes(Genre.ScienceFiction))
);

export const getTvShowSearchResults = createSelector(
	selectTvShowsState,
	fromTvShows.selectAll
);
