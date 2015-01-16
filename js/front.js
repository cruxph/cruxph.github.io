
   var tag = document.createElement('script');
    console.log('HERE')
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        console.log('IFrame API ready')
        player = new YT.Player('vid', {
          width: '100%',
          videoId: 'DfhwTkQ6oYw',
          playerVars:{
            controls: 0,
            modestBranding: 0,
            loop: 1,
            rel: 0,
            info: 0 
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      }

      function onPlayerReady(event) {
        console.log("Player ready");
      }

$(document).ready(function(){
    function customPlayback(){
        if ($('#vid').is(":in-viewport(72)")) {
            console.log("Video in viewport. Playing video.")
            player.playVideo();
        } else if (player.getPlayerState()==1){
            console.log("Video NOT in viewport. Pausing video.")
            player.pauseVideo();
        }
    }

    $(window).scroll(customPlayback);

    $('.carousel').on('slid.bs.carousel', function(){
        console.log("WE SLID!")
        customPlayback();
    }); 

});