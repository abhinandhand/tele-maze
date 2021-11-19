import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { tvShowReducer, tvShowsStateFeatureKey } from 'src/app/store/tv-shows/reducers';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { DetailEffects } from './effects/detail.effects';



@NgModule({
  declarations: [
    ShowDetailComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(tvShowsStateFeatureKey, tvShowReducer),
    EffectsModule.forFeature([DetailEffects])
  ]
})
export class DetailModule { }
