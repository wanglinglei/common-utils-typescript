/*
 * @Author: wanglinglei
 * @Description: 数字相关方法 
 * @Date: 2024-09-23 20:37:58
 * @LastEditTime: 2024-09-23 20:49:57
 * @FilePath: /personal/common-utils-typescript/packages/dataType/number.ts
 */



/**
 * @description: 获取两个整数之间的随机整数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * @description: 判断一个数字是否为偶数
 * @param {number} value
 * @return {*}
 */
export function isEven(value: number) {
  return value % 2 === 0;
}


/**
 * @description: 计算一组数字的平均值
 * @param {number} numbers
 * @return {*}
 */
export function averageNumber(numbers: number[]) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}