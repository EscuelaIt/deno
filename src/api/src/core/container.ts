import { container } from "../../deps.ts";
import { IMAGE_REPOSITORY_TYPE, PERSON_REPOSITORY_TYPE } from "./types.ts";
import { ImageHttpRepository } from "../features/fake-person/infrastructure/image-http-repository.ts";
import { PersonHttpRepository } from "../features/fake-person/infrastructure/person-http-repository.ts";

container.register(IMAGE_REPOSITORY_TYPE, ImageHttpRepository);
container.register(PERSON_REPOSITORY_TYPE, PersonHttpRepository);
