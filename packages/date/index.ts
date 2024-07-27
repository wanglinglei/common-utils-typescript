/*
 * @Author: wanglinglei
 * @Description: 日期相关方法
 * @Date: 2024-07-24 18:20:46
 * @LastEditTime: 2024-07-25 11:15:13
 * @FilePath: /common-utils-typescript/packages/date/index.ts
 */

import dayjs from "dayjs";

const weekDays = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

/**
 * @description: 根据给定的日期确定星期几
 * @default: 当前日期
 * @param {number} time
 * @return {*}
 */
export function getWeekDay(time?: number | string): string {
  const date = dayjs(time);
  if (date.isValid()) {
    return weekDays[date.day()];
  }
  return "";
}
