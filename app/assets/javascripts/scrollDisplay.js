$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() + $(window).innerHeight() / 2 > $('.slide-5-container').offset().top ) {
      $('.scrolldown').css({display: "none"})
    } else {
      $('.scrolldown').css({display: "block"})
    }
  });
});
