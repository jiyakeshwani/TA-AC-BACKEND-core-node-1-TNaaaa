var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleServer);

function handleServer(res, req) {
  let parsedUrl = url.parse(req.url);
  if (req.method === "GET" && parsedUrl.pathname === "/") {
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "GET" && parsedUrl.pathname === "/about") {
    fs.createReadStream("./about.html").pipe(res);
  } else if (req.method === "GET" && parsedUrl.pathname === "/contact") {
    fs.createReadStream("./contact.html").pipe(res);
  } else if (
    (req.method === "GET", parsedUrl.pathname.split(".").pop() === "css")
  ) {
    res.setHeader("Content-Type", "text/css");

    fs.readFile("./style.css" + parsedUrl.pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else {
    res.statusCode = 404;

    res.end("404 page not found");
  }
}

server.listen(3000, () => {
  console.log("server is listening to port 3000");
});
