import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { TvShow, TvShowSearchResults } from '../models/tvshow.model';

const apiBaseUrl = ' https://api.tvmaze.com/';

enum MazeEndPoint {
  AllShows = 'shows',
  Search = 'search/shows',
  Detail = 'shows/'
}

@Injectable({
  providedIn: 'root'
})
export class TeleMazeService {


  constructor(private httpClient: HttpClient) { }

  getAllShows(): Observable<TvShow[]> {

    return this.httpClient.get<TvShow[]>(`${apiBaseUrl}${MazeEndPoint.AllShows}`).
      pipe(retry(3));
  }

  showDetail(showId: string): Observable<TvShow> {
    return this.httpClient.get<TvShow>(`${apiBaseUrl}${MazeEndPoint.Detail}${showId}`)
      .pipe(retry(3));
  }

  search(searchTerm: string): Observable<TvShowSearchResults[]> {

    return this.httpClient.get<TvShowSearchResults[]>(`${apiBaseUrl}${MazeEndPoint.Search}`, {params: { q : searchTerm}})
      .pipe(
        retry(3));
  }

}
