const http = require('http');

const port=8000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.end('<h1>Hellooo World</h1>')
})

server.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})