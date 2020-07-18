// $(window).scroll(function() {
//     var wScroll = $(this).scrollTop();
//     // PORTFOLIO
//     if (wScroll > $('.row.gallery').offset().top - 300) {
//         $('.thumbnail__container').each(function(i) {
//             setTimeout(function() {
//                 $('.thumbnail__container').eq(i).addClass('show');
//             }, 300 * (i + 1))
//         })
//     }
// });

$(window).on('load', function() {

    $('.thumbnail__container').each(function(i) {
        setTimeout(function() {
            $('.thumbnail__container').eq(i).addClass('show');
        }, 300 * (i + 1))
    })
});