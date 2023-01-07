const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/wtf") {
    res.write("Hello from example-project");
    res.end();
  }
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`);
