import { FakePerson } from "./fake-person.ts";

export interface FakePersonRepository {
  create(fakePerson: FakePerson): Promise<void>;
}
