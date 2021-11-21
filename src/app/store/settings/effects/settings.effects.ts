import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { Settings } from "src/app/shared/models/settings.mode";
import { DeviceType, ScreenWidthType } from "src/app/shared/shared.enum";
import { determineAppSetting, initialiseAppSettiing } from "../actions/settings.actions";

@Injectable()
export class SettingEffects {

  determineAppSettings$ = createEffect(() => this.action$.pipe(
     ofType(determineAppSetting),
     map(() => {
       const settings = this.fetchAppSettings();
       return initialiseAppSettiing({settings})
     })
    ));


  constructor(
    private action$: Actions
  ){}

  fetchAppSettings(): Settings {
    let screenWidthType: ScreenWidthType;
    const deviceWidth = window.innerWidth;

    if(deviceWidth <= 568) {
      screenWidthType = ScreenWidthType.Mobile
    } else if (deviceWidth <= 900) {
      screenWidthType = ScreenWidthType.TabletPortrait
    } else if (deviceWidth <= 1200) {
      screenWidthType = ScreenWidthType.TabletLandscape
    } else {
      screenWidthType = ScreenWidthType.Desktop;
    }

    return {
      userAgent: this.getDeviceType(),
      screenWidthType
    };
  }

  getDeviceType = () => {
    const agent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(agent)) {
      return DeviceType.Tablet;
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(agent)) {
      return DeviceType.Mobile;
    }
    return DeviceType.Desktop;
  };
}
