var http = require("https");

var options = {
  "method": "GET",
/*  "hostname":  //original version
    "opentdb",
    "com"
  , */
  "hostname": [
    "opentdb",
    "com"
  ],
  "path": [
    "api.php"
  ],
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "c4c463ca-b231-4d8c-bb72-36ea418eab59"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

