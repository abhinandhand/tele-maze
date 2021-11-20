import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { tvShowReducer, tvShowsStateFeatureKey } from 'src/app/store/tv-shows/reducers';
import { SearchEffects } from './effects/search.effects';
import { ResultsComponent } from './components/results/results.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    StoreModule.forFeature(tvShowsStateFeatureKey, tvShowReducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
