import { assertEquals } from "https://deno.land/std@0.57.0/testing/asserts.ts";

Deno.test("should add values", () => {
  const actual = 1 + 2;

  assertEquals(actual, 3);
});
