$(document).ready(function() {
  $("#toggle-walrus").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $("#toggle-cat").click(function(){
    $(".cat-showing").toggle();
    $(".cat-hidden").toggle();
  });
});
