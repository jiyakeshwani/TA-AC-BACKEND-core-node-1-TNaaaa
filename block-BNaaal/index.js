var http = require("http");

function handleRequest(res, req) {
  console.log(res, req);
}
http.createServer(handleRequest).listen(4000, "localHost");
