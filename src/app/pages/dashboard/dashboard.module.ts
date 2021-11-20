import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { tvShowReducer, tvShowsStateFeatureKey } from 'src/app/store/tv-shows/reducers';
import { ShowGalleryComponent } from './components/show-gallery/show-gallery.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardEffects } from './effects/dashboard.effects';


@NgModule({
  declarations: [
    ShowGalleryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature(tvShowsStateFeatureKey, tvShowReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
