import { ensureFile } from "../deps.ts";

interface People {
  people: { name: string; age: number }[];
}

const stringifiedPeople = await Deno.readTextFile("./people.json");

const people: People = JSON.parse(stringifiedPeople);
const transformedPeople = people.people.map(({ age, name }) => ({
  name,
  birthday: new Date(new Date().getFullYear() - age, 0),
}));

const outputFile = "./transformed-people.json";
await ensureFile(outputFile);
await Deno.writeTextFile(
  outputFile,
  JSON.stringify({ people: transformedPeople })
);
