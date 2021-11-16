const http = require("http");

const server = http.createServer((req, res) => {
  let { method, url } = req;
  if (req.url === "/home") {
    let data = "home";
    res.writeHead(200, { "Content-Type": "application/json" });
    const responseBody = { method, url, data };
    res.end(JSON.stringify(data));
  } else if (req.url === "/about") {
    let data = "about";
    res.end(JSON.stringify(data));
  } else if (req.url === "/contact") {
    let data = "contact";
    res.end(JSON.stringify(data));
  } else {
    res.statusCode(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(8000, () => {
  console.log("server is running");
});
