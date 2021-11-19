import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tvShowReducer, tvShowsStateFeatureKey } from 'src/app/store/tv-shows/reducers';
import { SearchEffects } from './effects/search.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature(tvShowsStateFeatureKey, tvShowReducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
