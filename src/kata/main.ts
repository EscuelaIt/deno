import {
  readFileStr,
  writeFileStr,
  ensureFile,
} from "https://deno.land/std@0.57.0/fs/mod.ts";
import { Flipper } from "./flipper.ts";

const frameworks = await readFileStr("./frameworks.txt");
const flipper = new Flipper();
const flippedFrameworks = flipper.flip(frameworks);
await ensureFile("./worksframe.txt");
await writeFileStr("./worksframe.txt", flippedFrameworks);
