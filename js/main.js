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
});
