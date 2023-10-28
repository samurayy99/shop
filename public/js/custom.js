/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/******************************************
    Version: 1.0
******************************************/
(function ($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 54
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  });
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  });

  // Scroll to top  		
  if ($('#scroll-to-top').length) {
    var scrollTrigger = 100; // px
    var backToTop = function backToTop() {
      var scrollTop = $(window).scrollTop();
      $('#scroll-to-top').toggleClass('show', scrollTop > scrollTrigger);
    };
    backToTop();
    $(window).scroll(backToTop);
    $('#scroll-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  // Banner 
  $('.heading').height($(window).height());
  $('.parallaxie').parallaxie();

  // LOADER
  $(window).on('load', function () {
    $("#preloader").delay(500).fadeOut();
    $(".preloader").delay(600).fadeOut("slow");
  });
});
/******/ })()
;