import { getUrlParams } from "../../packages/browser/index";
import { expect, test, describe, it, beforeEach } from "vitest";
describe("getUrlParams", () => {
  beforeEach(() => {
    // @ts-ignore
    global.window = {
      location: {
        href: "https://example.com?param1=value1&param2=value2",
      },
    };
  });

  test("should return correct params object", () => {
    const params = getUrlParams(global.window.location.href);
    expect(params).toEqual({ param1: "value1", param2: "value2" });
  });

  test("should handle empty params", () => {
    // @ts-ignore
    global.window = {
      location: {
        href: "https://example.com",
      },
    };
    const params = getUrlParams(global.window.location.href);
    expect(params).toEqual({});
  });

  test("should handle null url", () => {
    const params = getUrlParams(null);
    expect(params).toEqual({});
  });
});
