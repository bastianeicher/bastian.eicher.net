$(function() {
  "use strict";

  // Update active item in navbar
  $('body').scrollspy({
    target: '.navbar',
    offset: 100
  });

  $('.scroll-link').click(function () {
    // Smooth scrolling
    var navbarOnTop = $('.navbar-toggler').is(':visible')
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - (navbarOnTop ? 56 : 0)
    }, 1000, "easeInOutExpo");

    // Collapse mobile navbar
    $('.navbar-collapse').collapse('hide');

    return false;
  });
});
