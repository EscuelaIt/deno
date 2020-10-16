import { assertEquals } from "../deps.ts";
import { count } from "./fruit-counter.ts";

Deno.test("should count a single fruit", () => {
  const fruits = ["🍋", "🍋", "🍋"];

  const actual = count(fruits);

  assertEquals(actual, { "🍋": 3 });
});

Deno.test("should count several fruits", () => {
  const fruits = ["🍋", "🍉", "🍋"];

  const actual = count(fruits);

  assertEquals(actual, { "🍋": 2, "🍉": 1 });
});
