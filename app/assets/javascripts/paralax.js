// $(document).ready(function(){
//   $('.box-slide').each(function() {
//     var off = $(this).offset().top
//     $(this).data('orig-offset', off);
//   });
//   $(window).scroll(function(){
//     var scrollTop = $(window).scrollTop();

//     $('.box-slide').each(function(){
//       var off = $(this).data('orig-offset');

//       if (scrollTop >= off && window.innerWidth > 768 && true ){
//         var translate =  (scrollTop - off) / $(window).height() * 100;
//         $(this).css({transform: 'translateY(' + translate +'%)'});
//       }
//      });
//   });
// });
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() + 100 > $('.slide-5-container').offset().top ) {
      $('.scrolldown').css({display: "none"})
    } else {
      $('.scrolldown').css({display: "block"})
    }
  });
});
