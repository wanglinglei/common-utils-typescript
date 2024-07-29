/*
 * @Author: wanglinglei
 * @Description: 浏览器相关
 * @Date: 2024-07-27 16:05:52
 * @LastEditTime: 2024-07-27 16:21:21
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
