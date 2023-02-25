$("#owl-carousel_section .owl-carousel").owlCarousel({  //id section name
  loop: true, // "true" is infinity - "false" is not infinity
  dots: true, // "true" is dots - "false" is not dots
  nav: true,  // "true" is navigation - "false" is not navigation
  margin: 10, //item margin
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
    },
    600: {
      items: 2,
      nav: true,
      loop: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});
