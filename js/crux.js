$(function(){
    $(document).on('click','#about-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#about').position().top}, 'slow');
    });
    $(document).on('click','#work-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:($('.item.active').offset().top + $('.item.active').outerHeight(true) - 72)}, 'slow');
    });
    $(document).on('click','#contact-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#contact').position().top}, 'slow');
    });
    $(document).on('click','#home-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#home').position().top}, 'slow');
    });
});

