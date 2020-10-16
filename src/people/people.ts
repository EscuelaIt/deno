import { ensureFile } from "../deps.ts";

interface People {
  people: { name: string; age: number }[];
}

const stringifiedPeople = await Deno.readTextFile("./people.json");

const people: People = JSON.parse(stringifiedPeople);

const transformedPeople = people.people.map((person) => ({
  name: person.name,
  birthday: new Date(new Date().getFullYear() - person.age, 0),
}));

await ensureFile("transformed-people.json");

await Deno.writeTextFile(
  "transformed-people.json",
  JSON.stringify({ people: transformedPeople })
);
