import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/models/tvshow.model';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';
import { getComedyShows, getCrimeShows, getDramaShows, getFamilyShows, getMusicShows, getRomanceShows, getScienceFictionShows, getSportsShows, getThrillerShows } from 'src/app/store/tv-shows/reducers/tv-shows.selectors';
import { dashboardPageOnDestroy } from '../../actions/dashboard.actions';

@Component({
  selector: 'app-show-gallery',
  templateUrl: './show-gallery.component.html',
  styleUrls: ['./show-gallery.component.scss']
})
export class ShowGalleryComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getLoadingState);

  thrillerShows$: Observable<TvShow[]> = this.store.select(getThrillerShows)
  familyShows$: Observable<TvShow[]> = this.store.select(getFamilyShows);
  dramaShows$: Observable<TvShow[]> = this.store.select(getDramaShows);
  comedyShows$: Observable<TvShow[]> = this.store.select(getComedyShows);
  sportsShows$: Observable<TvShow[]> = this.store.select(getSportsShows);
  crimeShows$: Observable<TvShow[]> = this.store.select(getCrimeShows);
  musicShows$: Observable<TvShow[]> = this.store.select(getMusicShows);
  romanceShows$: Observable<TvShow[]> =  this.store.select(getRomanceShows);
  scienceFictionShows$: Observable<TvShow[]> = this.store.select(getScienceFictionShows);


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(dashboardPageOnDestroy());
  }

}
