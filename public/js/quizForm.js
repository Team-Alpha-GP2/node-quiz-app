$(function(){
    $("#submitButton").on("submit",function(event){
        eventPreventDefault();
var checkBoxval=$("input[type='checkbox']:checked").val().trim();
 // Send the POST request.
 $.ajax("/api/Results", {
    type: "POST",
    data: checkBoxval
  }).then(
    function() {
      console.log("quizForm checbox posted ");
      
      
    }
  );
    });
});