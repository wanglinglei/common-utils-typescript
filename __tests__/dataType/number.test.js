import {isEven,averageNumber} from "../../packages/dataType/number";
import { expect, test, describe, it,afterEach,beforeEach } from "vitest";

describe('isEven 判断偶/奇数', () => {
  test('偶数', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
  });

  test('奇数', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
  });
});

describe('averageNumber 计算一组数字的平均数', () => {
  test('空数组', () => {
    expect(averageNumber([])).toBe(0);
  });

  test('平均值', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(averageNumber(numbers)).toBe(3);
  });
});