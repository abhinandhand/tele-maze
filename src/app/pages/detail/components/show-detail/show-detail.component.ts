import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TvShow } from 'src/app/shared/models/tvshow.model';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';
import { selectDetailedShow } from 'src/app/store/tv-shows/reducers/tv-shows.selectors';
import { detailPageOnDestroy } from '../../actions/detail.actions';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(getLoadingState);

  detailedShow$: Observable<TvShow[]> =  this.store.select(selectDetailedShow)

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(detailPageOnDestroy());
  }

}
