import http from "http";
import url from "url";

const PORT = 8080;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });

  if (pathname === "/api/hello" && req.method === "GET") {
    res.end(JSON.stringify({ message: "Hello from API" }));
  } else if (pathname === "/api/time" && req.method === "GET") {
    res.end(JSON.stringify({ time: new Date().toISOString() }));
  } else if (pathname === "/api/greet" && req.method === "GET") {
    const name = query.name || "Guest";
    res.end(JSON.stringify({ message: `Hello, ${name}!` }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
