var request = require("request");

var options = {
  method: 'GET',
  url: 'https://opentdb.com/api.php',
  qs: { amount: '10', category: '21' },
  headers:
    {
      'Postman-Token': 'd889cc2b-a3f6-413a-95d4-d725a3eab021',
      'Cache-Control': 'no-cache'
    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  // var questionPool = JSON.stringify(body, null, 4);
  var jsonPretty = JSON.stringify(JSON.parse(body), null, 2);
  // console.log(questionPool);
  console.log(jsonPretty);

});