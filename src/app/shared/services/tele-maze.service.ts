import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from  'rxjs/operators';
import { TvShow, TvShowSearchResults } from '../models/tvshow';
import { Genre } from '../shared.enum';

const apiBaseUrl = ' https://api.tvmaze.com/';

enum MazeEndPoint {
  Shows = 'shows',
  Search = 'search/shows',
  Detail = 'shows/'
}

@Injectable({
  providedIn: 'root'
})
export class TeleMazeService {


  constructor(private httpClient: HttpClient) { }

  getShows(): Observable<TvShow[]> {
    const genreAsQueryString = Object.values(Genre).join('+');

    return this.httpClient.get<any>(`${apiBaseUrl}${MazeEndPoint.Shows}`, {params: { q : genreAsQueryString}})
      .pipe(map(response => response as TvShow[]));
  }

  showDetail(showId: string): Observable<TvShow> {
    return this.httpClient.get<any>(`${apiBaseUrl}${MazeEndPoint.Detail}${showId}`)
      .pipe(map(response => response as TvShow));
  }

  search(searchTerm: string): Observable<TvShowSearchResults[]> {

    return this.httpClient.get<any>(`${apiBaseUrl}${MazeEndPoint.Search}`, {params: { q : searchTerm}})
      .pipe(map(response => response as TvShowSearchResults[]));
  }

}