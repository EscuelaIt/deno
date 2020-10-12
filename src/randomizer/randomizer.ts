import { serve } from "../deps.ts";

const server = serve({ port: 8080 });

for await (const request of server) {
  const [, params] = request.url.split("?");
  const searchParams = new URLSearchParams(params);
  const start = Number(searchParams.get("start"));
  const end = Number(searchParams.get("end"));
  request.respond({ body: (Math.random() * end + start).toFixed(0) });
}
