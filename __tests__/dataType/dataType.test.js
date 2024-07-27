import { getDataType } from "../../packages/dataType/index";
import { expect, test, describe, it } from "vitest";
describe("getDataType 函数测试", () => {
  test('应该返回 "string" 对于字符串对象', () => {
    const result = getDataType("test");
    expect(result).toEqual("string");
  });

  test('应该返回 "number" 对于数字对象', () => {
    const result = getDataType(123);
    expect(result).toEqual("number");
  });

  test('应该返回 "boolean" 对于布尔对象', () => {
    const result = getDataType(true);
    expect(result).toEqual("boolean");
  });

  test('应该返回 "object" 对于普通对象', () => {
    const result = getDataType({});
    expect(result).toEqual("object");
  });

  test('应该返回 "array" 对于数组对象', () => {
    const result = getDataType([]);
    expect(result).toEqual("array");
  });

  test('应该返回 "function" 对于函数对象', () => {
    const result = getDataType(() => {});
    expect(result).toEqual("function");
  });

  test('应该返回 "null" 对于 null 对象', () => {
    const result = getDataType(null);
    expect(result).toEqual("null");
  });

  test('应该返回 "undefined" 对于 undefined 对象', () => {
    const result = getDataType(undefined);
    expect(result).toEqual("undefined");
  });
});
