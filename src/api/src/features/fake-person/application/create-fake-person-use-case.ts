import { UseCase } from "../../../core/use-case.ts";
import { ImageRepository } from "../domain/image-repository.ts";
import { Inject, Injectable } from "../../../../deps.ts";
import {
  IMAGE_REPOSITORY_TYPE,
  PERSON_REPOSITORY_TYPE,
} from "../../../core/types.ts";
import { PersonRepository } from "../domain/person-repository.ts";
import { State } from "./state.ts";

@Injectable()
export class CreateFakePersonUseCase implements UseCase {
  constructor(
    @Inject(IMAGE_REPOSITORY_TYPE)
    private readonly imageRepository: ImageRepository,
    @Inject(PERSON_REPOSITORY_TYPE)
    private readonly personRepository: PersonRepository
  ) {}

  async execute(): Promise<void> {
    const person = await this.personRepository.find();
    const image = await this.imageRepository.find(person.gender);

    State.patch([
      {
        lastName: person.lastName,
        name: person.name,
        photo: image.photo,
        gender: person.gender,
      },
    ]);
  }
}
