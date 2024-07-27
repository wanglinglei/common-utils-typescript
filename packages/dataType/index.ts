/*
 * @Author: wanglinglei
 * @Description: 数据类型相关
 * @Date: 2024-07-24 19:23:36
 * @LastEditTime: 2024-07-26 14:25:31
 * @FilePath: /npm-packages/common-utils-typescript/packages/dataType/index.ts
 */

export enum EDataType {
  String = "string",
  Number = "number",
  Boolean = "boolean",
  Array = "array",
  Object = "object",
  Function = "function",
  Undefined = "undefined",
  Null = "null",
  Symbol = "symbol",
}

export type TDataType = `${EDataType}`;

/**
 * @description: 获取数据类型
 * @default null
 * @param {any} data
 * @return {TDataType}
 */
export function getDataType(data: any): TDataType {
  const type = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLowerCase() as TDataType;
  return type;
}

/**
 * @description: 判断数据是否为空
 * @param {any} data
 * @return {*}
 */
export function isEmptyData(data: any): boolean {
  const dataType = getDataType(data);
  switch (dataType) {
    case EDataType.String:
      return data === "";
    case EDataType.Number:
      return isNaN(data) || data === 0;
    case EDataType.Boolean:
      return data === false;
    case EDataType.Array:
      return data.length === 0;
    case EDataType.Object:
      return Object.keys(data).length === 0;
    case EDataType.Null:
      return true;
    case EDataType.Undefined:
      return true;
    case EDataType.Symbol:
      return true;
    default:
      return false;
  }
}
