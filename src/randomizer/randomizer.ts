import { serve } from "../deps.ts";

const server = serve({ port: 8080 });

for await (const request of server) {
  request.respond({ body: (Math.random() * 10).toFixed(0) });
}
