$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();

    // gather use Input
    var userI = $(".userInput").val();

    var dont = [];
    // convert the contents of i to a string
    for (i = 0; i <= userI; i ++){
      dont.push(i.toString());
    }

    results = lies(dont,userI);
    $("#dontIgnore").text(results);
    $(".container").hide();
    $("h1").hide();

    function lies(dont,userI){
      for (i = 0; i <= userI; i++){
        if (dont[i].includes("5")){
          dont[i] = "Hi!";
        } else if (dont[i].includes("7")){
          dont[i] = "Hello?!";
        } else if (dont[i].includes("9")){
          dont[i] = "Don't ingore me!!!";
        }
      }
      return dont;
    }
  });
});
