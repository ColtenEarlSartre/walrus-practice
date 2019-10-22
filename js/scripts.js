$(document).ready(function() {
  $("#toggle-walrus").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $("#toggle-cat").click(function(){
    $(".cat-showing").toggle();
    $(".cat-hidden").toggle();
  });
  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light");
  });











});
