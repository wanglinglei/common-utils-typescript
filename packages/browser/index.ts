/*
 * @Author: wanglinglei
 * @Description: 浏览器相关
 * @Date: 2024-07-27 16:05:52
 * @LastEditTime: 2024-07-30 21:26:14
 * @FilePath: /common-utils-typescript/packages/browser/index.ts
 */

/**
 * @description: 获取url参数
 * @param {string} url
 * @return {*}
 */
export function getUrlParams(url: string): Record<string, string> {
  if (!url) return {};
  let urlStr = url.split("?")[1];
  const urlSearchParams = new URLSearchParams(urlStr);
  return Object.fromEntries(urlSearchParams.entries());
}

/**
 * @description: 开启全屏
 * @param {HTMLElement} element
 * @return {*}
 */
export function launchFullScreen(element: HTMLElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    // @ts-ignore
  } else if (element.mozRequestFullScreen) {
    //@ts-ignore
    element.mozRequestFullScreen();
    // @ts-ignore
  } else if (element.webkitRequestFullScreen) {
    // @ts-ignore
    element.webkitRequestFullScreen();
    // @ts-ignore
  } else if (element.msRequestFullScreen) {
    // @ts-ignore
    element.msRequestFullScreen();
  }
}

/**
 * @description: 退出全屏
 * @return {*}
 */
export function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // @ts-ignore
    document.msExitFullscreen();
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // @ts-ignore
    document.mozCancelFullScreen();
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // @ts-ignore
    document.webkitExitFullscreen();
  }
}

/**
 * @description: 获取当前浏览器类型
 * @return {*}
 */
export function getExplorer():
  | "IE"
  | "Firefox"
  | "Chrome"
  | "Opera"
  | "Safari"
  | "unknown" {
  const ua = window.navigator.userAgent;
  const isExplorer = (exp: any) => {
    return ua.indexOf(exp) > -1;
  };
  if (isExplorer("MSIE")) {
    return "IE";
  } else if (isExplorer("Firefox")) {
    return "Firefox";
  } else if (isExplorer("Chrome")) {
    return "Chrome";
  } else if (isExplorer("Opera")) {
    return "Opera";
  } else if (isExplorer("Safari")) {
    return "Safari";
  } else {
    return "unknown";
  }
}
