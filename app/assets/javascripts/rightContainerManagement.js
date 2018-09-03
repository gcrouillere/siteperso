if ($(window).innerWidth() / $(window).innerHeight() > 1.3) {
    $('.services').css({minHeight: "calc(100vh - 100px)"});
    $('.last-service').css({minHeight: "calc(100vh - 60px)"});
}

$(window).on( "orientationchange", function() {
  if ($(window).innerWidth() / $(window).innerHeight() > 1.3) {
    $('.services').css({minHeight: "calc(100vh - 100px)"});
    $('.last-service').css({minHeight: "calc(100vh - 60px)"});
  }
});
