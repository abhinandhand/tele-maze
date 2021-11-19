import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { tvShowReducer, tvShowsStateFeatureKey } from 'src/app/store/tv-shows/reducers';
import { ShowGalleryComponent } from './components/show-gallery/show-gallery.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    ShowGalleryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(tvShowsStateFeatureKey, tvShowReducer)
  ]
})
export class DashboardModule { }
