var url = require("url");
var parsedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroitand `,
  true
);
console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol);
