$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 10000,
    grid: true,
    prefix: "$",
    max_postfix: "+",
  });

  $(".pagenumber").slick({
    slidestoShow: 12,
    infinite:false,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
