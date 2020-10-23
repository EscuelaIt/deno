import { App } from "../../../../deps.ts";
import { FakePeopleArea } from "./fake-people-area.ts";

export const app = new App({
  areas: [FakePeopleArea],
});
