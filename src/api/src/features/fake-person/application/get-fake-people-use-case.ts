import { UseCase } from "../../../core/use-case.ts";
import { ImageRepository } from "../domain/image-repository.ts";
import { Injectable, Inject } from "../../../../deps.ts";
import {
  IMAGE_REPOSITORY_TYPE,
  PERSON_REPOSITORY_TYPE,
} from "../../../core/types.ts";
import { PersonRepository } from "../domain/person-repository.ts";
import { State } from "./state.ts";
import { FakePerson } from "../domain/fake-person.ts";

@Injectable()
export class GetFakePeopleUseCase implements UseCase<FakePerson[]> {
  constructor() {}

  async execute(): Promise<FakePerson[]> {
    return State.fakePeople;
  }
}
