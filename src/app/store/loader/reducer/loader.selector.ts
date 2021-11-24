import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoaderState } from "./loader.reducer";

const selectState = createFeatureSelector<ILoaderState>('loader');

export const getLoadingState = createSelector(
	selectState,
	({ isLoading }: ILoaderState) => isLoading
);
