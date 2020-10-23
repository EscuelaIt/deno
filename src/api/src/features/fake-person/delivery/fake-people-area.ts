import { Area } from "../../../../deps.ts";
import { FakePeopleController } from "./fake-people-controller.ts";

@Area({
  controllers: [FakePeopleController],
})
export class FakePeopleArea {}
