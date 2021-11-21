import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Settings } from "src/app/shared/models/settings.mode";
import { settingsFeatureKey } from ".";

export const selectSettingsState = createFeatureSelector<Settings>(settingsFeatureKey);

export const selectSettings = createSelector(
	selectSettingsState, (settings) => settings
);
