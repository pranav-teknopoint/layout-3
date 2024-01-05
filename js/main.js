$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 10000,
    grid: true,
    prefix: "$",
    max_postfix: "+",
  });

  document.querySelectorAll(".floatingicon").forEach((expand, index) => {
    expand.addEventListener("click", () => {
      const prevBids = document.querySelectorAll(".filterslist")[index];
      prevBids.classList.toggle("unactive");
      prevBids.classList.toggle("active");
    });
  });

  document.querySelectorAll(".floatingicon").forEach((expand, index) => {
    expand.addEventListener("click", () => {
      const prevBids = document.querySelectorAll(".backdrop")[index];
      prevBids.classList.toggle("unactive");
      prevBids.classList.toggle("active");
    });
  });

});
