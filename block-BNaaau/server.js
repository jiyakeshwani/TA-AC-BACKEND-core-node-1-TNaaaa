/* 
writeCode

Q. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object

Q. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object

Q. write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.

Q. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method

Q. write code to create a node server 
  - add listener on port 7000
  - also add a callback function to listener with a console `server listening on port 7000`
  - return entire request headers in response.

Q. create a server
  - add a listener on port 3333
  - set status code 202 in response using `res.statusCode`.

Q. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

Q. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'})

Q. create a server
  - add listener on port 5050
  - use postman to do a POST request on index route
  - console to check request method
  - send HTML response i.e. `<h2>posted for first time</h2>`

Q. create a server and handle 2 different requests
  - add a listener on port 2345
  - handle GET request on '/' route where return your name in plain text in response
  - handle GET request on '/about' route and return your name in h2 as HTML page.
  - add a error handler at last to handle request made on other than above routes with a status code of 404.
    
Q. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.

Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params
*/

var http = require("http");
var fs = require("fs");

var server = http.createserver(handleServer);
function handleServer(res, req) {
  console.log(res, req);
}

server.listen(5000, () => {
  console.log("server is listening to port 5000");
});

var nodeServer = http.createserver(handleNodeServer);
function handleNodeServer(res, req) {
  console.log(res, req);
  console.log(res.headers);
  res.setHeader("content-type", "text/html");
  res.end("My first server in NodeJS");
}

nodeServer.listen(5100, () => {
  console.log("server is listening to port 5100");
});

var nodeServer1 = http.createserver(handleNodeServer1);
function handleNodeServer1(res, req) {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/html");
  res.end("My first server in NodeJS");
}

nodeServer.listen(5556, () => {
  console.log("server is listening to port 5556");
});
var nodeServer2 = http.createserver(handleNodeServer2);
function handleNodeServer2(res, req) {
  console.log(req.url, req.method);
  res.statusCode(202);
  res.setHeader("content-type", "text/html");
  res.end(req.headers);
}

nodeServer.listen(3333, () => {
  console.log("server is listening to port 3333");
});

var nodeServer3 = http.createserver(handleNodeServer3);
function handleNodeServer3(res, req) {
  res.statusCode(202);
  res.setHeader("content-type", "text/html");
  res.end(`<h3>Welcome to altcampus</h3>`);
}

nodeServer.listen(8000, () => {
  console.log("server is listening to port 8000");
});

var nodeServer4 = http.createserver(handleNodeServer4);
function handleNodeServer4(res, req) {
  res.statusCode(202);
  res.setHeader("content-type", "application/json");
  res.end({ success: true, message: "Welcome to Nodejs" });
}

nodeServer.listen(8888, () => {
  console.log("server is listening to port 8888");
});
