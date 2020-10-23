import "../src/core/container.ts";
import { App } from "../deps.ts";
import { PeopleArea } from "./features/people/delivery/people-area.ts";

export const app = new App({
  areas: [PeopleArea],
});
