
import { Action, createReducer, on } from '@ngrx/store';
import * as LoaderAction from '../actions/loader.actions';
export const loaderFeatureKey = 'loader';

export interface ILoaderState {
  isLoading: boolean;
}

export const defaultState: ILoaderState = {
  isLoading: false
}

const loaderDetailReducer = createReducer(
	defaultState,
	on(LoaderAction.setLoading, (state, { isLoading }): ILoaderState => ({ isLoading: isLoading !== undefined ? isLoading : state.isLoading }))
);

export function loaderReducer(state: ILoaderState | undefined, action: Action): ILoaderState {
	return loaderDetailReducer(state, action);
}

