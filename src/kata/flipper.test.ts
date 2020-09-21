import { assertEquals } from "https://deno.land/std@0.57.0/testing/asserts.ts";
import { Flipper } from "./flipper.ts";

Deno.test("should flip a word whose length is even", () => {
  const flipper = new Flipper();

  const actual = flipper.flip("hola");

  assertEquals(actual, "laho");
});

Deno.test("should flip a word whose length is odd by flipping after the next element after it's half point", () => {
  const flipper = new Flipper();

  const actual = flipper.flip("hello");

  assertEquals(actual, "lohel");
});

Deno.test("should flip several words", () => {
  const flipper = new Flipper();

  const actual = flipper.flip("hello\nhola");

  assertEquals(actual, "lohel\nlaho");
});

Deno.test("should only capitalize the first letter", () => {
  const flipper = new Flipper();

  const actual = flipper.flip("Hello");

  assertEquals(actual, "Lohel");
});
