const [filePath] = Deno.args;

const fileContent = await Deno.readTextFile(filePath);

console.log(fileContent);
