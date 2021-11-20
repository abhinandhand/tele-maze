import { createAction, props } from '@ngrx/store';

export enum LoaderActionTypes {
	SET_LOADING = '[Loader] Set loading state'
}

export const setLoading = createAction(
	LoaderActionTypes.SET_LOADING,
	props<{ isLoading: boolean }>()
);
