var fs = require("fs");
var http = require("http");

var server = http.createserver(handleServer);
function handleServer(res, req) {
  if (req.method === "GET" && req.url === "/file") {
    res.setHeader("content-type", "text/html");
    fs.readFile("./node.html", (err, content) => {
      if (err) {
        console.log(err);
      } else {
        console.log(content);
        res.end(content);
      }
    });
  } else if (req.method === "GET" && req.url === "/stream") {
    res.setHeader("content-type", "text/html");
    fs.createReadStream("./node.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("server is listening to port 5555");
});
