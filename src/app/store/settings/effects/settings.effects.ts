import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { Settings } from "src/app/shared/models/settings.mode";
import { DeviceType } from "src/app/shared/shared.enum";
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
    let deviceType: DeviceType;
    const deviceWidth = window.innerWidth;
    if(deviceWidth <= 568) {
      deviceType = DeviceType.Mobile
    } else if (deviceWidth <= 900) {
      deviceType = DeviceType.TabletPortrait
    } else if (deviceWidth <= 1200) {
      deviceType = DeviceType.TabletLandscape
    } else {
      deviceType = DeviceType.Desktop;
    }


    return {
      userAgent: navigator.userAgent,
      deviceType
    };
  }
}
