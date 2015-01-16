$(document).ready(function(){
  $(window).scroll(function(){
    var brand = $('.brand-logo');
    var treshold = ($('.item.active').offset().top + $('#gap').offset().top - 100)
    if ($(window).scrollTop() > treshold ) {
      if (!brand.hasClass('nav-scrolled')){
        //brand.fadeOut();
        brand.attr('src', '/img/crux-sign.png');
        brand.fadeIn();
        brand.addClass('nav-scrolled');
        $('.navbar').addClass('navbar-crux-default').find('.container').css('padding-top', '8px');;
      }
    } 
    else if ($(window).scrollTop() < treshold) {
      brand.attr('src', '/img/crux-logo.png');
      brand.fadeIn();
      brand.removeClass('nav-scrolled');
      $('.navbar').removeClass('navbar-crux-default').find('.container').css('padding-top', '42px');
    }
  });
});