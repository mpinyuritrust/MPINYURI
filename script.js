$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220);
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
  mouseenter: function() {
  rotating = false;
  },
  mouseleave: function() {
  rotating = true;
  }
  }, '#ourclients');
  function rotateClients() {
  if (rotating != false) {
  var $first = $('#clientlogo li:first');
  $first.animate({
  'margin-left': '-220px'
  }, 2000, function() {
  $first.remove().css({
  'margin-left': '0px'
  });
  $('#clientlogo li:last').after($first);
  });
  }
  }
  });


  //SCROLL MENU
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("scroll-up").style.display = "block";
    } else {
      document.getElementById("navbar").style.top = "-90px";
      document.getElementById("scroll-up").style.display = "none";
    }
  }

  //NAVIGATION
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }

  /* Demo purposes only */
  $(".hover").mouseleave(
  function () {
  $(this).removeClass("hover");
  }
  );

  /*CARD_SCROLLER*/
  function scrollright(){
  document.getElementById("section3").scrollLeft += 400;
  }
  function scrollleft(){
  document.getElementById("section3").scrollLeft -= 400;
  }
  /*CARD_SCROLLERENDS*/

  //LOADER
  var myVar;
  function myLoader() {
    myVar = setTimeout(showPage, 3000);
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  //SCROLL ANIMATE
  var scroll = window.requestAnimationFrame ||
               function(callback){ window.setTimeout(callback, 1000/60)};
  var elementsToShow = document.querySelectorAll('.show-on-scroll');
  function loop() {

      Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });

      scroll(loop);
  }
  loop();

  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }


  //SCROLL ANIMATE
  var scroll2 = window.requestAnimationFrame ||
               function(callback2){ window.setTimeout(callback2, 1000/60)};
  var elementsToShow2 = document.querySelectorAll('.show-on-scroll2');
  function loop2() {

      Array.prototype.forEach.call(elementsToShow2, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible2');
        } else {
          element.classList.remove('is-visible2');
        }
      });

      scroll2(loop2);
  }
  loop2();

  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect2 = el.getBoundingClientRect();
    return (
      (rect2.top <= 0
        && rect2.bottom >= 0)
      ||
      (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect2.top >= 0 &&
        rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  //SCROLL ANIMATE
  var scroll3 = window.requestAnimationFrame ||
               function(callback3){ window.setTimeout(callback3, 1000/60)};
  var elementsToShow3 = document.querySelectorAll('.show-on-scroll3');
  function loop3() {

      Array.prototype.forEach.call(elementsToShow3, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible3');
        } else {
          element.classList.remove('is-visible3');
        }
      });

      scroll3(loop3);
  }
  loop3();

  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect3 = el.getBoundingClientRect();
    return (
      (rect3.top <= 0
        && rect3.bottom >= 0)
      ||
      (rect3.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect3.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect3.top >= 0 &&
        rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
