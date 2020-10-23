import { container } from "../../deps.ts";
import {
  DATABASE_TYPE,
  FAKE_PERSON_REPOSITORY_TYPE,
  IMAGE_REPOSITORY_TYPE,
  PERSON_REPOSITORY_TYPE,
} from "./types.ts";
import { PostgresDatabase } from "../features/people/infrastructure/postgres-database.ts";
import { ImageHttpRepository } from "../features/people/infrastructure/image-http-repository.ts";
import { PersonHttpRepository } from "../features/people/infrastructure/person-http-repository.ts";
import { FakePersonPostgresRepository } from "../features/people/infrastructure/fake-person-postgres-repository.ts";

container.register(DATABASE_TYPE, {
  useClass: PostgresDatabase,
});
container.register(IMAGE_REPOSITORY_TYPE, {
  useClass: ImageHttpRepository,
});
container.register(PERSON_REPOSITORY_TYPE, {
  useClass: PersonHttpRepository,
});
container.register(FAKE_PERSON_REPOSITORY_TYPE, {
  useClass: FakePersonPostgresRepository,
});
