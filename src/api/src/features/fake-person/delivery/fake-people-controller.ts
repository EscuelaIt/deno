import { Controller, Post, Get } from "../../../../deps.ts";
import { CreateFakePersonUseCase } from "../application/create-fake-person-use-case.ts";
import { GetFakePeopleUseCase } from "../application/get-fake-people-use-case.ts";

@Controller("/people")
export class FakePeopleController {
  constructor(
    private readonly createFakePersonUseCase: CreateFakePersonUseCase,
    private readonly getFakePeopleUseCase: GetFakePeopleUseCase
  ) {}

  @Post()
  createFakePerson() {
    this.createFakePersonUseCase.execute();
  }

  @Get()
  getFakePeople() {
    return this.getFakePeopleUseCase.execute();
  }
}
