import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { Settings } from "src/app/shared/models/settings.mode";
import * as DeviceUtils from 'src/app/shared/utils/device.utils';
import { determineAppSetting, initialiseAppSettiing } from "../actions/settings.actions";

@Injectable()
export class SettingEffects {

  determineAppSettings$ = createEffect(() => this.action$.pipe(
     ofType(determineAppSetting),
     map(() => {
       const settings: Settings =  {
         userAgent: DeviceUtils.getDeviceType(),
         screenWidthType: DeviceUtils.getScreenWidthType()
       }
       return initialiseAppSettiing({settings})
     })
    ));


  constructor(
    private action$: Actions
  ){}

}
