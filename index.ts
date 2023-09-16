import root from "./router/index.ts";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      const result = await root(req);
      return result;
    }
    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
