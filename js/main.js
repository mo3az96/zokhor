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
  //////////** main slider **//////////
  var mainswiper = new Swiper(".first-slider .swiper-container", {
    spaceBetween: 15,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".first-slider .swiper-btn-next",
      prevEl: ".first-slider .swiper-btn-prev",
    },
  });
  var mainswiper = new Swiper(".second-slider .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".second-slider .swiper-btn-next",
      prevEl: ".second-slider .swiper-btn-prev",
    },
  });
  var mainswiper = new Swiper(".third-slider .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".third-slider .swiper-btn-next",
      prevEl: ".third-slider .swiper-btn-prev",
    },
  });

  $(".checks-head").click(function () {
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
  });
  $(".checks-head .check").click(function (e) {
    e.stopPropagation();
  });
});
