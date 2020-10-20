import { assertEquals } from "../dev_deps.ts";

Deno.test("should add values", () => {
  const actual = 1 + 2;

  assertEquals(actual, 3);
});
