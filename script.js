$(document).ready(function() {
  for(var x = 0; x < 16; x++) {
      for(var y = 0; y < 16; y++) {
          var unit = $("<div class='unit'></div>");
          unit.appendTo('#container');
      }
  }

  var $color = "black";

  $(".unit").mouseover(function(){
    $(this).css("background-color", $color);
  });

  $("#reset").click(function(){
    $(".unit").css("background-color", "white");
  });
  
  $("#grey").click(function(){
      $color = "#BDBDBD";
  });

  $("#black").click(function(){
      $color = "black";
  });
});
