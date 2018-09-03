if ($(window).innerWidth() / $(window).innerHeight() > 1.3) {
    $('.services').css({minHeight: "calc(100vh - 100px)"});
    $('.last-service').css({minHeight: "calc(100vh - 60px)"});
}

$(window).resize(function() {
  if ($(window).innerWidth() / $(window).innerHeight() > 1.3) {
    $('.services').css({minHeight: "calc(100vh - 100px)"});
    $('.last-service').css({minHeight: "calc(100vh - 60px)"});
  } else {
    $('.services').css({minHeight: "auto"});
    $('.last-service').css({minHeight: "auto"});
  }
});
