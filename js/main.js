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
  $("#P").toggleClass("underline");
});

$("#center").click(function() {
  $("#P").toggleClass("align-center");
});
$("#left").click(function() {
  $("#P").toggleClass("align-left");
});
$("#right").click(function() {
  $("#P").toggleClass("align-right");
});

$("#justify").click(function() {
  $("#P").toggleClass("justify");
});

$("#color").change(function() {
  $(".changeMe").css("color", $(this).val() + " ");
});
