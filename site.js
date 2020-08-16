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

  // Matomo
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.eicher.net/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
});
