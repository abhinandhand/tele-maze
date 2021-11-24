
import { Action, createReducer, on } from '@ngrx/store';
import { Settings } from 'src/app/shared/models/settings.mode';
import * as SettingsAction from '../actions/settings.actions';

export const settingsFeatureKey = 'settings';

export const initialState = {} as Settings;

const settingsReducer = createReducer(
	initialState,
	on(SettingsAction.initialiseAppSettiing, (state, { settings }): Settings => ({...state, ...settings})
));

export function reducer(state: Settings | undefined, action: Action): Settings {
	return settingsReducer(state, action);
}

