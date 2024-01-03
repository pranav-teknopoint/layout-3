$(document).ready(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        grid: true, 
        prefix:"$",
        max_postfix:"+",
    });
});