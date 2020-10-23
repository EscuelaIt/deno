import { UseCase } from "../../../core/use-case.ts";
import {
  FAKE_PERSON_REPOSITORY_TYPE,
  IMAGE_REPOSITORY_TYPE,
  PERSON_REPOSITORY_TYPE,
} from "../../../core/types.ts";
import { Inject, Injectable } from "../../../../deps.ts";
import { ImageRepository } from "../domain/image-repository.ts";
import { PersonRepository } from "../domain/person-repository.ts";
import { FakePersonRepository } from "../domain/fake-person-repository.ts";

@Injectable()
export class CreatePersonUseCase implements UseCase<any> {
  constructor(
    @Inject(IMAGE_REPOSITORY_TYPE)
    private readonly imageRepository: ImageRepository,
    @Inject(PERSON_REPOSITORY_TYPE)
    private readonly personRepository: PersonRepository,
    @Inject(FAKE_PERSON_REPOSITORY_TYPE)
    private readonly fakePersonRepository: FakePersonRepository
  ) {}

  async execute(): Promise<any> {
    const [image, person] = await Promise.all([
      this.imageRepository.find(),
      this.personRepository.find(),
    ]);

    return this.fakePersonRepository.create({
      name: person.name,
      lastName: person.lastName,
      photo: image,
    });
  }
}
