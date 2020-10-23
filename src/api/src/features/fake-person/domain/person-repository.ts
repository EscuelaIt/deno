import { Person } from "./person.ts";

export interface PersonRepository {
  find(): Promise<Person>;
}
