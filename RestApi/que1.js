const http = require("http");
const user = require("./users.json");
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    let name = req.url.split("/");
    let result = user.filter((item) => item.userName === name[1]);

    res.end(JSON.stringify({ result }));
  }
  else{
    res.statusCode(404);
    res.end(JSON.stringify({message:"Route not found"}))
  }
});

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
