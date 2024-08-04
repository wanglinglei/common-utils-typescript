import {
  randomNumber,
  thousandSplit,
  formatMoney,
} from "../../packages/number/index";
import { expect, test, describe, it } from "vitest";

describe("randomNumber", () => {
  test("should return a number within the specified range", () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("should return the minimum value when max is equal to min", () => {
    const min = 5;
    const max = 5;
    const result = randomNumber(min, max);
    expect(result).toEqual(min);
  });

  test("should return a different number on each call", () => {
    const min = 1;
    const max = 10;
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(randomNumber(min, max));
    }
    expect(new Set(results).size).toEqual(10);
  });
});

describe("thousandSplit", () => {
  test("should split number into thousands with default locale", () => {
    const result = thousandSplit(12345);
    expect(result).toEqual("12,345");
  });

  test("should split string number into thousands with default locale", () => {
    const result = thousandSplit("12345");
    expect(result).toEqual("12,345");
  });

  // 可以添加更多的测试用例...
});

describe("formatMoney", () => {
  test("should format money with no decimal places", () => {
    expect(formatMoney(12345)).toEqual("12,345");
  });

  test("should format money with one decimal place", () => {
    expect(formatMoney(1234.5)).toEqual("1,234.5");
  });

  test("should format money with two decimal places", () => {
    expect(formatMoney(123.45)).toEqual("123.45");
  });

  test("should format money with leading zeros", () => {
    expect(formatMoney(00123)).toEqual("123");
  });

  test("should handle negative numbers", () => {
    expect(formatMoney(-12345)).toEqual("-12,345");
  });

  test("should handle large numbers", () => {
    expect(formatMoney(1234567890)).toEqual("1,234,567,890");
  });
});
