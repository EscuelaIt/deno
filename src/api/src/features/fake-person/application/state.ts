import { FakePerson } from "../domain/fake-person.ts";

export class State {
  static fakePeople: FakePerson[] = [];

  static patch(fakePeople: FakePerson[]) {
    return (State.fakePeople = [...this.fakePeople, ...fakePeople]);
  }
}
