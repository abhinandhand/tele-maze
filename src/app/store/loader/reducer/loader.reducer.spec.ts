import * as fromLoader from './loader.reducer';
import { setLoading } from '../actions/loader.actions';

describe('Loader Reducer', () => {
	it('should return the default state', () => {
		const { defaultState } = fromLoader;
		const action = setLoading({isLoading: false});
		const state = fromLoader.loaderReducer(undefined, action);

		expect(state).toEqual(defaultState);
	});

	it('should set loading to true', () => {
		const action = setLoading({
			isLoading: true
		});
		const state = fromLoader.loaderReducer(undefined, action);

		expect(state).toEqual({
			isLoading: true
		});
	});
});
