import { serve } from "../deps.ts";

const s = serve({ port: 8000 });

for await (const req of s) {
  req.respond({ body: "Hello World" });
}
