$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('floatingNav');
        $('.navbar').addClass('bg');
    } else {
        $('.navbar').removeClass('floatingNav');
        $('.navbar').removeClass('bg');
    }
});