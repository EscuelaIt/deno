import { serve } from "../deps.ts";

const server = serve({ port: 8080 });

for await (const request of server) {
  const [, params] = request.url.split("?");
  const searchParams = new URLSearchParams(params);
  const start = Number(searchParams.get("start") ?? 0);
  const end = Number(searchParams.get("end") ?? 3);
  request.respond({ body: (Math.random() * end + start).toFixed(0) });
}
