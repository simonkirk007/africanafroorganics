$(".openbtn").click(function () {
  $("#myNav").addClass("active");
});

$(".closebtn").click(function () {
  $("#myNav").removeClass("active");
});

$(".search a").click(function () {
  $(".search-bar").addClass("active");
});

$(".search-close-ic a").click(function () {
  $(".search-bar").removeClass("active");
});

$(".arrival-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
  '<div class="slick-prev"><i class="fal fa-arrow-circle-left"></i></div>',
nextArrow:
  '<div class="slick-next"><i class="fal fa-arrow-circle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".best-seller-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
  '<div class="slick-prev"><i class="fal fa-arrow-circle-left"></i></div>',
nextArrow:
  '<div class="slick-next"><i class="fal fa-arrow-circle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".test-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
  '<div class="slick-prev"><i class="fal fa-arrow-circle-left"></i></div>',
nextArrow:
  '<div class="slick-next"><i class="fal fa-arrow-circle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
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

$(".insta-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
  '<div class="slick-prev"><i class="fal fa-arrow-circle-left"></i></div>',
nextArrow:
  '<div class="slick-next"><i class="fal fa-arrow-circle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
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
$(".product-main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
  '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
nextArrow:
  '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  asNavFor: ".product-detail-btnslider",
});
$(".product-detail-btnslider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-main-img-slider",
});

// Initialize Wow
new WOW().init();
