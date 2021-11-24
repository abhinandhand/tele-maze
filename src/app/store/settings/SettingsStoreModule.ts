import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SettingEffects } from './effects/settings.effects';
import { reducer, settingsFeatureKey } from './reducer/settings.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(settingsFeatureKey, reducer),
    EffectsModule.forFeature([SettingEffects])
  ]
})
export class SettingStoreModule { }
