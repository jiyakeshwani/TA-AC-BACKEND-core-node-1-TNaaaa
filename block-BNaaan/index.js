var http = require("http");

function handleRequest(res, req) {
  console.log(req.headers, req.url, req.method);
}
http.createServer(handleRequest).listen(3000, "localHost");
