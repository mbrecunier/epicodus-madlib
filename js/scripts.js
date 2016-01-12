$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var verbing1 = $("input#verbing1").val();
    var feeling = $("input#feeling").val();
    var name = $("input#name").val();
    var pluralnoun = $("input#pluralnoun").val();
    var adjective1 = $("input#adjective1").val();
    var verbing2 = $("input#verbing2").val();
    var adjective2 = $("input#adjective2").val();
    var noun = $("input#noun").val();
    var adverb = $("input#adverb").val();

    $("span#verbing1").text(verbing1);
    $("span#feeling").text(feeling);
    $("span#name").text(name);
    $("span#pluralnoun").text(pluralnoun);
    $("span#adjective1").text(adjective1);
    $("span#verbing2").text(verbing2);
    $("span#adjective2").text(adjective2);
    $("span#noun").text(noun);
    $("span#adverb").text(adverb);

    $("#story").show();

    event.preventDefault();
  });
});
