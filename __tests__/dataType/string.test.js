import {
  capitalize,
  reverseString,
  randomString,
  trimString,
} from "../../packages/dataType/string";
import { expect, test, describe, it } from "vitest";

describe("capitalize 字符串首字母转大写", () => {
  test("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });

  test("should handle an empty string", () => {
    expect(capitalize("")).toEqual("");
  });

  test("should handle a string with only one character", () => {
    expect(capitalize("a")).toEqual("A");
  });

  test("should not change the rest of the string", () => {
    expect(capitalize("world")).toEqual("World");
  });

  test("should handle a string with special characters", () => {
    expect(capitalize("123abc!@#")).toEqual("123abc!@#");
  });

  test("should handle a string with spaces", () => {
    expect(capitalize("hello world")).toEqual("Hello world");
  });
});

describe("reverseString 字符串翻转", () => {
  test("should reverse a string", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  test("should handle an empty string", () => {
    expect(reverseString("")).toEqual("");
  });

  test("should handle a string with one character", () => {
    expect(reverseString("a")).toEqual("a");
  });
});

describe("randomString 生成随机字符串", () => {
  test("should return a random string", () => {
    const result = randomString();
    expect(typeof result).toBe("string");
  });

  test("should not return an empty string", () => {
    const result = randomString();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("trimString 去除字符串空格", () => {
  test("should remove all spaces when type is 1", () => {
    expect(trimString("  hello world  ", 1)).toEqual("helloworld");
  });

  test("should remove leading and trailing spaces when type is 2", () => {
    expect(trimString("  hello world  ", 2)).toEqual("hello world");
  });

  test("should remove only leading spaces when type is 3", () => {
    expect(trimString("  hello world  ", 3)).toEqual("hello world  ");
  });

  test("should remove only trailing spaces when type is 4", () => {
    expect(trimString("  hello world  ", 4)).toEqual("  hello world");
  });

  test("should return the original string when type is not 1, 2, 3, or 4", () => {
    expect(trimString("hello world", 5)).toEqual("hello world");
  });
});
