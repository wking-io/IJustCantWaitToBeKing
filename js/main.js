$(document).ready(function(){

  //hamburger toggle
  $('.nav__icon').click(function(){
    $(this).toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end hamburger toggle

  //menu close on link click
  $('#mobile-about, #mobile-services, #mobile-testimonials, #mobile-contact').click(function(){
    $('.nav__icon').toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end menu close

  //slick carousel
  $('.gallery__images').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  var deadline = 'November 19 2016 14:00:00 GMT-0500';

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  var countdown = document.getElementById("daysLeft");

  countdown.innerHTML = getTimeRemaining(deadline).days;
});
