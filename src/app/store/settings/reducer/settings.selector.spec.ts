import { Settings } from "src/app/shared/models/settings.mode";
import { DeviceType, ScreenWidthType } from "src/app/shared/shared.enum";
import { selectSettings } from "./settings.selector";

describe('settings selector', ()=> {
    it('should return the device setting state on using the settings selector', ()=>{
        const state: Settings = {
          userAgent: DeviceType.Desktop,
          screenWidthType: ScreenWidthType.Desktop
        };

        const result = selectSettings.projector(state, {});

        expect(result).toBe(state);

    });
});
