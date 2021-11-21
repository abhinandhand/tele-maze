import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/models/tvshow.model';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';
import { getTvShowSearchResults } from 'src/app/store/tv-shows/reducers/tv-shows.selectors';
import { searchPageOnDestroy } from '../../actions/search.actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(getLoadingState);
  searchResults$: Observable<TvShow[]> = this.store.select(getTvShowSearchResults);

  constructor(private store: Store) { }

  ngOnDestroy(): void {
    this.store.dispatch(searchPageOnDestroy());
  }

}
