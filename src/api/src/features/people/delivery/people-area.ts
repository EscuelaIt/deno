import { PeopleController } from "../application/people-controller.ts";
import { Area } from "../../../../deps.ts";

@Area({
  controllers: [PeopleController],
})
export class PeopleArea {}
