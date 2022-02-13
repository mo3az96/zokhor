$(window).on("load", function () {
  $(".splash").fadeOut("500", function () {
    $(this).remove();
  });
});
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $("nav").addClass("active");
    $(".overlay").fadeIn(300);
  });
  $(".overlay,.close-btn").click(function () {
    $("nav").removeClass("active");
    $(".overlay").fadeOut(300);
  });
});
