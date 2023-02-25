$("#best-section .owl-carousel").owlCarousel({  //id section name
  loop: true, // "true" is infinity - "false" is not infinity
  dots: true, // "true" is dots - "false" is not dots
  nav: false,  // "true" is navigation - "false" is not navigation
  margin: 10, //item margin
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
    },
    550: {
      items: 2,
      nav: false,
      loop: true,
    },
  },
});

$("#catigory-section .owl-carousel").owlCarousel({  //id section name
  loop: true, // "true" is infinity - "false" is not infinity
  dots: true, // "true" is dots - "false" is not dots
  nav: false,  // "true" is navigation - "false" is not navigation
  margin: 10, //item margin
  responsive: {
    0: {
      items: 2,
      nav: false,
      loop: true,
    },
    550: {
      items: 2,
      nav: false,
      loop: true,
    },
  },
});
