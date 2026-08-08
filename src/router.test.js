import { describe, it, expect } from "vitest";
import {
  getPageFromPath,
  getPageStateFromLocation,
  buildRoute,
} from "./router";

describe("router helpers", () => {
  it("identifies a blog slug route", () => {
    expect(getPageFromPath("/blog/skincare-routine")).toBe("blog");
  });

  it("builds a shareable route for a blog post", () => {
    expect(
      buildRoute(
        "blog",
        "packages",
        "skincare-routine",
        "https://example.com/",
      ),
    ).toBe("/blog/skincare-routine");
  });

  it("parses direct service URLs with categories", () => {
    const location = {
      href: "https://example.com/services?category=massage",
      search: "?category=massage",
      pathname: "/services",
    };
    expect(getPageStateFromLocation(location)).toEqual({
      page: "services",
      category: "massage",
      blogSlug: null,
    });
  });
});
