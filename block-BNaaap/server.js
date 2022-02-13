let http = require("http");

let server = http.createServer(handleServer);

function handleServer(res, req) {
  res.writeHead = (201, { "content-type": "text/html" });
  res.end = ("<h1> Welcome </h1>");
}
server.listen(4444, () => {
  console.log("server is listening to port 4444");
});
