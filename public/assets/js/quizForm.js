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

    var tempLength = quizData.length;

    for (var x = 0; x < tempLength; x++) {
      $.post("/api/Topic_1s", quizData)
    }
  });

  $("#submitButton").on("submit", function (event) {
    eventPreventDefault();
    var radioVal = $("input[type='radio']:checked").val().trim();
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