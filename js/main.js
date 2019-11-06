$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
  });

  // pc-nav   mouseleave

  $('.header').on('mouseenter', '.pc-nav li', function () {
    var _this = $(this);
    _this.find('.dropdown').stop().slideDown();
  });

  $('.header').on('mouseleave', '.pc-nav li', function () {
    var _this = $(this);
    _this.find('.dropdown').stop().slideUp();
  });





  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  // 搜索框弹出
  var isshowSearch = false
  $("header").delegate("#search_btn", "click", function () {
    $('.nav-show').css({ 'opacity': 0 })
    $('.search-form').addClass('search-show')
    $('.header').addClass('bgf')
    isshowSearch = true
  });
  // 搜索框g关闭
  $("header").delegate(".search-close", "click", function () {
    $('.nav-show').css({ 'opacity': 1 })
    $('.search-form').removeClass('search-show')
    isshowSearch = false
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 100 || isshowSearch == true) {
      $('.header').addClass('bgf')
    } else {
      $('.header').removeClass('bgf')
    }
  });
})
$(document).ready(function () {
  $("header").delegate(".hamburger", "click", function () {
    $(this).toggleClass("is-active");
    $('.nav-mobile').toggleClass('active')
  });
})
