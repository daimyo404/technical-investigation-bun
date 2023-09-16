import { describe, expect, test } from "bun:test";
import run from "../../router";

describe("router", () => {
  test("run", async () => {
    const req = new Request("http://localhost:3000/?hoge=fuga");
    const res = await run(req);
    expect(res).toEqual({ result: "fuga" });
  });
});
