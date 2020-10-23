import { Http } from "../../../core/http.ts";
import { Injectable } from "../../../../deps.ts";
import { PersonDto } from "./person-dto.ts";
import { PersonRepository } from "../domain/person-repository.ts";
import { Person } from "../domain/person.ts";
import { Gender } from "../domain/gender.ts";

@Injectable()
export class PersonHttpRepository implements PersonRepository {
  constructor(private readonly http: Http) {}

  async find(): Promise<Person> {
    const personDto = await this.http.get<PersonDto>(
      "https://pipl.ir/v1/getPerson"
    );
    return {
      name: personDto.person.personal.name,
      lastName: personDto.person.personal.last_name,
      gender: personDto.person.personal.gender.toLowerCase() as Gender,
    };
  }
}
