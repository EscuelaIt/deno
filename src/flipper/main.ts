import { Flipper } from "./flipper.ts";

const frameworks = `
LitElement
Angular
Ember
React
Vue
Stencil
Preact
Snowpack
jQuery
Svelte
Express
Sails
Koa
Nuxt
Next
Node
Deno
`;
const flipper = new Flipper();
const flippedFrameworks = flipper.flip(frameworks);
console.log(flippedFrameworks);
