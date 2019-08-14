$(document).ready(function() {
  $(".wow").click(function() {
    alert("Wow! That was pretty cool if I say so myself!");
  });

  $(".click").click(function() {
    $(".disappear1").hide();
  });

  $(".hide1").click(function() {
    $(".disappear2").hide();
  });
  $(".show2").click(function() {
    $(".disappear2").show();
  });

  $(".toggle-button").click(function() {
    $(".toggle").toggle();
  });

  $(".slide1").click(function() {
    $(".slide2").slideDown("slow");
  });

  $(".slide-up").click(function() {
    $(".slide-up2").slideUp("slow");
  });

  $("#slideToggle").click(function() {
    $(".slide-tog-btn").slideToggle("slow");
  });

  $(".fade-btn").click(function() {
    console.log("working");
    $(".number-1").fadeIn();
    $(".number-2").fadeIn("slow");
    $(".number-3").fadeIn(3000);
  });
});
