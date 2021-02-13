// typing script----
var typed = new Typed(".typing", {
  strings: [
    "Web Designer",
    "YouTuber",
    "Freelancer",
    "Self Motivator",
    "Blogger",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

var typed = new Typed(".typing2", {
  strings: [
    "Web Designer",
    "YouTuber",
    "Freelancer",
    "Self Motivator",
    "Blogger",
  ],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
});
// scroll script----
$(window).scroll(function () {
  if (this.scrollY > 20) {
    $(".nav-bar").addClass("sticky");
  } else {
    $(".nav-bar").removeClass("sticky");
  }
  if (this.scrollY > 500) {
    $(".scroll-up-btn").addClass("show");
  } else {
    $(".scroll-up-btn").removeClass("show");
  }
});

// slide up script----
$(".scroll-up-btn").click(function () {
  $("html").animate({ scrollTop: 0 });
});

// toggle menu/navbar script
$(".menu-btn").click(function () {
  $(".nav-bar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// owl carousel script------

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});


// page animation------

new WOW().init();
