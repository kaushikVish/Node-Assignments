const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  const rstreamn = fs.createReadStream("input.txt");
  rstreamn.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstreamn.on("end", () => {
    res.end();
  });
  rstreamn.on("error", (err) => {
    console.log(err);
    res.end("file not found");
  });
});

server.listen(8000, () => {
  console.log("server is listening");
});

