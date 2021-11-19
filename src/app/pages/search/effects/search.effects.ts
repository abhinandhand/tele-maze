import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, switchMap } from "rxjs/operators";
import { TvShow, TvShowSearchResults } from "src/app/shared/models/tvshow";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { TeleMazeRoutes } from "src/app/shared/shared.enum";
import { loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";

@Injectable()
export class SearchEffects {

  searchRouted$ = createEffect(() => this.action$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter(() => location.pathname.split('/').includes(TeleMazeRoutes.Search)),
      switchMap(() => this.teleMazeService.search('under the dome').
        pipe(
          switchMap((response) => {
            const searchResults = this.mapTvShows(response);
            return [
              loadTvShowInfos({tvShows: searchResults})
            ]
          })
        ))
      ))

  constructor(
    private action$: Actions,
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
