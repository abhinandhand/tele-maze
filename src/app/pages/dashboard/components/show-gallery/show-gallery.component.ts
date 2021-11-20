import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { dashboardPageOnDestroy } from '../../actions/dashboard.actions';

@Component({
  selector: 'app-show-gallery',
  templateUrl: './show-gallery.component.html',
  styleUrls: ['./show-gallery.component.scss']
})
export class ShowGalleryComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(dashboardPageOnDestroy());
  }

}
