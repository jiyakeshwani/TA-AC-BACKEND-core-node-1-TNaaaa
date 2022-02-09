console.log("welcome to node.js");
var os = require("os");
var fm = os.freemem();
var cpus = os.cpus();
var time = os.uptime();
console.log(fm, cpus.time);

var buff1 = Buffer.alloc(12);
console.log(buff1);

// blocking code
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("for loop ends");

// non-blocking code
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
console.log("for loop ends");
