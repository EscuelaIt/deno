import { Datetime } from "../deps.ts";

const watcher = Deno.watchFs(".");

const modifiedFiles: string[] = [];

for await (const event of watcher) {
  if (event.kind === "create") {
    const markdownFiles = event.paths.filter((path) => path.endsWith(".md"));

    markdownFiles.forEach(async (markdownFile) => {
      if (modifiedFiles.includes(markdownFile)) {
        return;
      }

      const content = await Deno.readTextFile(markdownFile);
      const contentWithHeader = `---
date: ${Datetime.format(new Date(), "yyyy-MM-dd")}
---

${content}
`;
      await Deno.writeTextFile(markdownFile, contentWithHeader);
      modifiedFiles.push(markdownFile);
    });
  }
}
