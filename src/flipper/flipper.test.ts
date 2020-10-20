import { assertEquals } from "../deps.ts";
import { Flipper } from "./flipper.ts";

Deno.test("should flip a word which length is even", () => {
  const flipper = new Flipper();

  const actual = flipper.flip(["hola"]);

  assertEquals(actual, ["laho"]);
});

Deno.test("should flip a word which length is odd", () => {
  const flipper = new Flipper();

  const actual = flipper.flip(["hello"]);

  assertEquals(actual, ["llohe"]);
});
