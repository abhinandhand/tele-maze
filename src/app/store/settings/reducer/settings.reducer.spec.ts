import * as fromSettings from './settings.reducer';
import { initialiseAppSettiing } from '../actions/settings.actions';
import { DeviceType, ScreenWidthType } from 'src/app/shared/shared.enum';
import { Settings } from 'src/app/shared/models/settings.mode';

describe('Settings Reducer', () => {

	it('should set device setting ', () => {
    const settingState: Settings = {
      userAgent: DeviceType.Desktop,
      screenWidthType: ScreenWidthType.Desktop
    };
		const action = initialiseAppSettiing({
			settings: settingState
		});

    const state = fromSettings.reducer(undefined, action);

		expect(state).toEqual({
      userAgent: DeviceType.Desktop,
      screenWidthType: ScreenWidthType.Desktop
		});
	});
});
