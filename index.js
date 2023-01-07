const http = require("http");
const { env } = require("process");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from example-project");
    res.end();
  }
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Listening on port ${port}`);
