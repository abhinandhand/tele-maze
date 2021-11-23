import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/models/tvshow.model';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';
import { selectComedyShows, selectCrimeShows, selectDramaShows, selectFamilyShows, selectMusicShows, selectRomanceShows, selectScienceFictionShows, selectSportsShows, selectThrillerShows, selectTopRatedShows } from 'src/app/store/tv-shows/reducers/tv-shows.selectors';
import { dashboardPageOnDestroy } from '../../actions/dashboard.actions';

@Component({
  selector: 'app-show-gallery',
  templateUrl: './show-gallery.component.html',
  styleUrls: ['./show-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowGalleryComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getLoadingState);

  topRatedShows$: Observable<TvShow[]> = this.store.select(selectTopRatedShows)
  thrillerShows$: Observable<TvShow[]> = this.store.select(selectThrillerShows);
  familyShows$: Observable<TvShow[]> = this.store.select(selectFamilyShows);
  dramaShows$: Observable<TvShow[]> = this.store.select(selectDramaShows);
  comedyShows$: Observable<TvShow[]> = this.store.select(selectComedyShows);
  sportsShows$: Observable<TvShow[]> = this.store.select(selectSportsShows);
  crimeShows$: Observable<TvShow[]> = this.store.select(selectCrimeShows);
  musicShows$: Observable<TvShow[]> = this.store.select(selectMusicShows);
  romanceShows$: Observable<TvShow[]> =  this.store.select(selectRomanceShows);
  scienceFictionShows$: Observable<TvShow[]> = this.store.select(selectScienceFictionShows);


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(dashboardPageOnDestroy());
  }

}
