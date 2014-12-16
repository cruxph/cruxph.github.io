$(function(){
    $(document).on('click','#about-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#about').position().top}, 'slow');
    });
    $(document).on('click','#work-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#work').position().top}, 'slow');
    });
    $(document).on('click','#contact-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#contact').position().top}, 'slow');
    });
});

