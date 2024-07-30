import {
  getUrlParams,
  launchFullScreen,
  getExplorer,
} from "../../packages/browser/index";
import { expect, test, describe, it, beforeEach, vi } from "vitest";
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

// @ts-ignore
global.document = {
  // 模拟元素
  querySelector: vi.fn().mockReturnValueOnce({}),
};

describe("launchFullScreen", () => {
  it("should call requestFullscreen on the element", () => {
    const element = document.querySelector("body");

    launchFullScreen(element);

    expect(element.requestFullscreen).toHaveBeenCalledTimes(1);
  });

  it("should call mozRequestFullScreen on the element", () => {
    const element = document.querySelector("body");

    // @ts-ignore
    element.mozRequestFullScreen = vi.fn();

    launchFullScreen(element);

    expect(element.mozRequestFullScreen).toHaveBeenCalledTimes(1);
  });

  it("should call webkitRequestFullScreen on the element", () => {
    const element = document.querySelector("body");

    // @ts-ignore
    element.webkitRequestFullScreen = vi.fn();

    launchFullScreen(element);

    expect(element.webkitRequestFullScreen).toHaveBeenCalledTimes(1);
  });

  it("should call msRequestFullScreen on the element", () => {
    const element = document.querySelector("body");

    // @ts-ignore
    element.msRequestFullScreen = vi.fn();

    launchFullScreen(element);

    expect(element.msRequestFullScreen).toHaveBeenCalledTimes(1);
  });
});

import { getExplorer } from "./index";

// @ts-ignore
global.navigator = {
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};

describe("getExplorer", () => {
  test('should return "IE" when user agent contains "MSIE"', () => {
    // @ts-ignore
    global.navigator.userAgent =
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)";
    expect(getExplorer()).toEqual("IE");
  });

  test('should return "Firefox" when user agent contains "Firefox"', () => {
    // @ts-ignore
    global.navigator.userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0";
    expect(getExplorer()).toEqual("Firefox");
  });

  test('should return "Chrome" when user agent contains "Chrome"', () => {
    // @ts-ignore
    global.navigator.userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    expect(getExplorer()).toEqual("Chrome");
  });

  test('should return "Opera" when user agent contains "Opera"', () => {
    // @ts-ignore
    global.navigator.userAgent =
      "Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18";
    expect(getExplorer()).toEqual("Opera");
  });

  test('should return "Safari" when user agent contains "Safari"', () => {
    // @ts-ignore
    global.navigator.userAgent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15";
    expect(getExplorer()).toEqual("Safari");
  });
});
