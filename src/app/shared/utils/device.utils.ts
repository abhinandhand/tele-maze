import { DeviceType, ScreenWidthType } from "../shared.enum";

export function getScreenWidthType(): ScreenWidthType {
  const deviceWidth = window.innerWidth;

  if(deviceWidth <= 568) {

    return ScreenWidthType.Mobile
  } else if (deviceWidth <= 900) {

    return ScreenWidthType.TabletPortrait
  } else if (deviceWidth <= 1200) {

    return ScreenWidthType.TabletLandscape
  } else {

    return ScreenWidthType.Desktop;
  }
}

export function getDeviceType(): DeviceType {
    const agent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(agent)) {
      return DeviceType.Tablet;
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(agent)) {
      return DeviceType.Mobile;
    }
    return DeviceType.Desktop;
};
