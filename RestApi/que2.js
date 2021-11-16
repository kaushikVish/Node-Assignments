const http = require("http");
const port = 8000;

const user = [
  {
    id: 1,
    userName: "chinu",
    branch: "mechanical",
    firstName: "Vishal",
    lastName: "kaushik",
    password: "1234",
  },
  {
    id: 2,
    userName: "ramu",
    branch: "Computer science",
    firstName: "ram",
    lastName: "sharma",
    password: "1234",
  },
  {
    id: 3,
    userName: "priya",
    branch: "Computer science",
    firstName: "riya",
    lastName: "sharma",
    password: "1234",
  },
  {
    id: 4,
    userName: "shyamu",
    branch: "Electronics",
    firstName: "shyam",
    lastName: "sharma",
    password: "1234",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/students") {
    if (req.method === "GET") {
      res.end(JSON.stringify({ user }));
    }
  }
  //   else if(req.url === '/students/:branchName'){
  //       const search=req.url.split("/students/")
  //       res.end(search)
  //   }
  else {
    if (req.method === "GET") {
      const search = req.url.split("/students/");
      let result = user.filter((item) => item.branch === search[1]);
      res.end(JSON.stringify({ result }));
    }
  }
});

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
