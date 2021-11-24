import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Settings } from "src/app/shared/models/settings.mode";
import { settingsFeatureKey } from "./settings.reducer";

export const selectSettingsState = createFeatureSelector<Settings>(settingsFeatureKey);

export const selectSettings = createSelector(
	selectSettingsState, (settings) => settings
);
