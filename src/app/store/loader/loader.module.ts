import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { loaderFeatureKey, loaderReducer } from './reducer/loader.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loaderFeatureKey, loaderReducer)
  ]
})
export class LoaderStoreModule { }
