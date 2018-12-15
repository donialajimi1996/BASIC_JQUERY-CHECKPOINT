$("#font-family").change(function() {
  $(".changeMe").css("font-family", $(this).val());
});

$("#size").change(function() {
  $(".changeMe").css("font-size", $(this).val() + "px");
});

$("#bold").click(function() {
  $("#P").toggleClass("bold");
});
$("#italic").click(function() {
  $("#P").toggleClass("italic");
});
$("#underline").click(function() {
  $("#P").css("text-decoration","underline");
});

$("#center").click(function() {
  $("#P").css("text-align","center");
});
$("#left").click(function() {
  $("#P").css("text-align","left");
});
$("#right").click(function() {
  $("#P").css("text-align","right");
});

$("#justify").click(function() {
  $("#P").css("text-align","justify");
});

$("#color").change(function() {
  $(".changeMe").css("color", $(this).val() + " ");
});
