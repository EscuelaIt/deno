import { Controller, Post, Get } from "../../../../deps.ts";
import { CreatePersonUseCase } from "./create-person-use-case.ts";

@Controller("/people")
export class PeopleController {
  constructor(private readonly createPersonUseCase: CreatePersonUseCase) {}

  @Post()
  createPerson() {
    return this.createPersonUseCase.execute();
  }

  @Get()
  getPeople() {
    return "Hello";
  }
}
