import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { filter, switchMap, tap } from "rxjs/operators";
import { TvShow, TvShowSearchResults } from "src/app/shared/models/tvshow";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { setLoading } from "src/app/store/loader/actions/loader.actions";
import { loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";

@Injectable()
export class SearchEffects {

  searchRouted$ = createEffect(() => this.action$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Search)),
      tap(() => this.store.dispatch(setLoading({isLoading: true}))),
      switchMap(() => this.teleMazeService.search(decodeURI(location.search).split('=')[1]).
        pipe(
          switchMap((response) => {
            const searchResults = this.mapTvShows(response);
            return [
              loadTvShowInfos({tvShows: searchResults}),
              setLoading({isLoading: false}),
            ]
          })
        ))
      ))

  constructor(
    private action$: Actions,
    private store: Store,
    private teleMazeService: TeleMazeService,
  ){}

  mapTvShows(searchresults: TvShowSearchResults[]): TvShow[] {
    return searchresults.map(data => ({
      score: data.score,
      id: data.show.id,
      genres: data.show.genres,
      image: data.show.image,
      language: data.show.language,
      name: data.show.name,
      premiered: data.show.premiered,
      rating: data.show.rating,
      runtime: data.show.runtime,
      summary: data.show.summary
    }))
  }
}
