import { expect, test, describe, it } from "vitest";
import { getWeekDay } from "../../packages/date/index";
describe("getWeekDay", () => {
  it("should return the correct weekday for a valid date string", () => {
    const result = getWeekDay("2023-09-05");

    expect(result).toEqual("星期二");
  });

  it("should return the correct weekday for a valid date number", () => {
    const result = getWeekDay(1693586400000);

    expect(result).toEqual("星期六");
  });

  it("should handle invalid input gracefully", () => {
    const result = getWeekDay("invalid date");

    expect(result).toEqual("");
  });
});
