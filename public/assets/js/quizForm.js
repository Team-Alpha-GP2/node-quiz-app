$(function () {

  $("#quizFitness").on("click", function (event) {
    eventPreventDefault();
    var queryURL = "https://opentdb.com/api.php?amount=10&category=21&type=multiple";

    var quizData = {};
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {
      console.log(data);
      quizData = data;
    })

    console.log(quizData);
    
    var tempLength = quizData.length;

    for (var x = 0; x < tempLength; x++) {
      $.post("/api/Topic_1s", quizData[x])
    }

    // $.ajax("/quizForm", function (req, res) {
      // res.sendFile(path.join(__dirname;

    $.ajax("quizForm");

  });

  $("quizForm").on("load", function (event) {
    eventPreventDefault();


  })

  $("#submitButton").on("submit", function (event) {
    eventPreventDefault();
    var radioVal = $("input[type='radio']:").val().trim();
    // Send the POST request.
    $.ajax("/api/Results", {
      type: "POST",
      data: radioVal
    }).then(
      function () {
        console.log("quizForm checbox posted ");


      }
    );
  });
});