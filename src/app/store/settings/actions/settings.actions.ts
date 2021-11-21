import { createAction, props } from "@ngrx/store";
import { Settings } from "src/app/shared/models/settings.mode";

export const determineAppSetting = createAction(
  '[APP] Determine App Settings'
);

export const initialiseAppSettiing = createAction(
  '[APP] Initialise App Settings',
  props<{settings: Settings}>()
);
