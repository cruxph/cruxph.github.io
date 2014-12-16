$(function(){
    $(document).on('click','#about-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#about').position().top}, 'slow');

    });
});

