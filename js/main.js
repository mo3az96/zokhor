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
  $(".filter-btn").click(function () {
    $(".pop-filters").addClass("active");
    $(".overlay").fadeIn(300);
  });
  $(".overlay,.close-btn").click(function () {
    $(".pop-filters").removeClass("active");
    $("nav").removeClass("active");
    $(".overlay").fadeOut(300);
  });
});
