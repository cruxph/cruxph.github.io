$(document).ready(function(){
    $(window).scroll(function(){
        var $brand = $('.navbar-brand');
        var $logo = $brand.find('.nav-logo');
        var treshold = ($('#cover').outerHeight()-34);
        if(window.innerWidth >= 768){
            if ($(window).scrollTop() > treshold ) {
                if (!$brand.hasClass('nav-scrolled')){

                    $brand.addClass('nav-scrolled');
                    $logo.attr('src', '/img/crux-logo-inverse.png');
                    $('.navbar').addClass('navbar-crux-default');
                }
            }
            else if ($(window).scrollTop() < treshold) {
                $logo.attr('src', '/img/crux-brand-inverse.png');
                $brand.removeClass('nav-scrolled');
                $('.navbar').removeClass('navbar-crux-default');
            }
        }
    });
});
$("[rel='tooltip']").tooltip();

$('.image-hover').hover(
    function(){
        $(this).find('.caption').show();
    },
    function(){
        $(this).find('.caption').hide();
    }
);

$(function(){
    $(document).on('click','#about-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:($('#about').offset().top)}, 'easeInOutExpo');
    });
    $(document).on('click','#work-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:($('#work').outerHeight() - 30) + ($('#montage').offset().top)}, 'slow');
    });
    $(document).on('click','#montage-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:($('#montage').outerHeight() - 30)}, 'slow');
    });
    $(document).on('click','#contact-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:($('#about').outerHeight() + $('#about').offset().top)}, 'slow');
    });
    $(document).on('click','#home-nav', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#cover').position().top}, 'slow');
    });
});

/*//Load YouTube iframe API
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var ytVideos = [];
 function onYouTubeIframeAPIReady() {
 //collect YouTube videos
 $('.video-content').each(function(index, video){
 ytVideos.push({
 video_id: $(video).attr('id'),
 player: new YT.Player(video)
 });
 });
 }*/

/*$(document).ready(function(){
 function customPlayback(){
 $.each(ytVideos, function(index, video){
 if ($('#'+video.video_id).is(":in-viewport(200)")){
 video.player.playVideo();
 } else if (video.player.getPlayerState()==1){
 video.player.pauseVideo();
 }
 });
 }

 $(window).scroll(customPlayback);
 $('.carousel').on('slid.bs.carousel', function(){
 customPlayback();
 });

 });*/
