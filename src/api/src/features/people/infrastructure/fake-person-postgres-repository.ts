import { FakePersonRepository } from "../domain/fake-person-repository.ts";
import { Injectable } from "../../../../deps.ts";
import { FakePerson } from "../domain/fake-person.ts";
import { PostgresDatabase } from "./postgres-database.ts";

@Injectable()
export class FakePersonPostgresRepository implements FakePersonRepository {
  constructor(private readonly database: PostgresDatabase) {}

  async create(fakePerson: FakePerson): Promise<void> {
    console.log(await this.database.query("SELECT * FROM fake_people"));
    await this.database.query(
      `INSERT INTO fake_people VALUES('${fakePerson.name}', '${fakePerson.lastName}', ${fakePerson.photo});`
    );
  }
}
