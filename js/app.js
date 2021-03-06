$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});











$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    var screenHeight = $( window ).height();

    if(scrollTop > screenHeight){

        $(".arrow").attr("style","display: none");

        $(".logo").attr("src","images/commentLogo.png");

        $('.navbar').addClass('blur');

        $(".nav-link").attr("id", "blackLink");

    } else {
        $(".arrow").attr("style","display: block");
        $(".logo").attr("src","images/whiteLogo.png");
        $('.navbar').removeClass('blur');
        $(".nav-link").attr("id","whiteLink");
    }
});





// auto changing bg videos after 12 seconds
window.onload = function start() {
    slide();
}

function slide() {
    var num = 0 ;
    var videoSrc = [
        'video/quality_excellence/For_Wes.mp4', 'video/idea/pencil_down.mp4', 'video/1/Dancing-Bulbs.mp4', 'video/quality_excellence/Undo.mp4'
    ];


    (function me() {
        num = (num + 1) % 4;
        console.log(num);
        $('video').attr('src', videoSrc[num]);

        setTimeout(me, 12000);
    })();
}




// Typejs
document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.element', {
        strings: ["optimized solutions", "digital ideas", "alternative solutions" ],
        typeSpeed: 50,
        backSpeed: 5,
        backDelay: 10000,
        loop: true
    });
});










// video background
function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
       var $video = $(videoTag),
           videoRatio = videoTag.videoWidth / videoTag.videoHeight,
           tagRatio = $video.width() / $video.height(),
           val;

       if (videoRatio < tagRatio) {
           val = tagRatio / videoRatio * 1.02; <!-- size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges -->
       } else if (tagRatio < videoRatio) {
           val = videoRatio / tagRatio * 1.02;
       }

       $video.css('transform','scale(' + val  + ',' + val + ')');

    });
}

$(function () {
    scaleToFill();

    $('.video-background').on('loadeddata', scaleToFill);

    $(window).resize(function() {
        scaleToFill();
    });
});
