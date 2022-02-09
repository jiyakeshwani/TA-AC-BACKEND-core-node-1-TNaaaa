var fs = require("fs");
fs.readFile = "content.md";

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("for loop ends");

for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
console.log("for loop ends");

let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to buffer");
