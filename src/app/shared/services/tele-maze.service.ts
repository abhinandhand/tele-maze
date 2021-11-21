import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    return this.httpClient.get<any>(`${apiBaseUrl}${MazeEndPoint.AllShows}`)
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
