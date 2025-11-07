
var slickPrimary = {
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(0.84, 0, 0.08, 0.99)",
    asNavFor: ".text-slider",
    centerMode: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next")
}

var slickSecondary = {
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(0.84, 0, 0.08, 0.99)",
    asNavFor: ".image-slider",
    prevArrow: $(".prev"),
    nextArrow: $(".next")
}

$(".image-slider").slick(slickPrimary);
$(".text-slider").slick(slickSecondary);



















