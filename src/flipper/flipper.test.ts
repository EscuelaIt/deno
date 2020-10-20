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

Deno.test("should flip a word capitalizing correctly", () => {
  const flipper = new Flipper();

  const actual = flipper.flip(["Hello"]);

  assertEquals(actual, ["Llohe"]);
});

Deno.test("should flip all the frameworks", () => {
  const flipper = new Flipper();

  const actual = flipper.flip([
    "LitElement",
    "Angular",
    "Ember",
    "React",
    "Vue",
    "Stencil",
    "Preact",
    "Snowpack",
    "jQuery",
    "Svelte",
    "Express",
    "Sails",
    "Koa",
    "Nuxt",
    "Next",
    "Node",
    "Deno",
  ]);

  assertEquals(actual, [
    "Ementlitel",
    "Ularang",
    "Berem",
    "Actre",
    "Uev",
    "Ncilste",
    "Actpre",
    "Packsnow",
    "eryjQu",
    "Ltesve",
    "Ressexp",
    "Ilssa",
    "Oak",
    "Xtnu",
    "Xtne",
    "Deno",
    "Node",
  ]);
});
