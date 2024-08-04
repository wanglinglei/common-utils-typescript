/*
 * @Author: wanglinglei
 * @Description: 数字类型相关方法
 * @Date: 2024-08-04 20:08:02
 * @LastEditTime: 2024-08-04 20:09:58
 * @FilePath: /common-utils-typescript/packages/number/index.ts
 */

/**
 * @description: 生成范围内随机数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description: 数字千分位分隔
 * @param {number} int
 * @return {*}
 */
export function thousandSplit(int: number | string): string {
  return Number(int).toLocaleString("zh-CN");
}

/**
 * @description: 金额格式化正则
 * @param {number} int
 * @return {*}
 */
export function formatMoney(int: number | string): string {
  const string = String(int);
  return string.replace(
    new RegExp(`(?!^)(?=(\\d{3})+${string.includes(".") ? "\\." : "$"})`, "g"),
    ","
  );
}
