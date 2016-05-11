$(document).ready(function() {

  $('.gallery-slider').slick({
    cssEase: 'ease-out',
    speed: 250,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  $('.gallery-slide-nav').click(function() {
    $('.gallery-slider').slick('slickGoTo', $(this).index(), true);
    $('html').addClass('open-modal');
  });

  $('.modal-close').click(function(){
    $('html').removeClass('open-modal');
  });  
});