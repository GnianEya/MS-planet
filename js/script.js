$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});
//animation
AOS.init({
  duration: 2000,
  once: false,
});

//testimonial
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
//course
$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
    filter: ".foundational-math",
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // alert(filterValue);
    $(".isotope-container").isotope({ filter: filterValue });

    //active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//magnific popup
$(document).ready(function () {
  $("#course-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "video",
    // other options
    gallery: {
      enabled: true,
    },
  });
});

//nav section
$(document).ready(function () {
  $(window).scroll(function () {
    // alert("hello");
    if ($(window).scrollTop() > 250) {
      $("nav").addClass("white-nav-top");
      $("#up-to-down"), fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $("#back-to-top"), fadeOut();
    }
  });
});
// smooth - scroll;
$(document).ready(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var select_id = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(select_id).offset().top - 64,
      },
      1250,
      "easeOutExpo"
    );
  });
});
