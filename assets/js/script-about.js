$(window).on('load', function() {
    $('.col-lg.left').addClass('show');
    $('.col-lg.right').addClass('show');
});


$(window).scroll(function() {
    // JUMBOTRON
    var wScroll = $(this).scrollTop();

    // MY SKILL
    if (wScroll > $('.row.mySkill-heading').offset().top - 350) {
        $('.col.design').addClass('show');
        $('.col.coding').addClass('show');
        $('.row.mySkill-heading').each(function(i) {
            setTimeout(function() {
                $('.row.mySkill-heading').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
    }

    // EDUCATION, EXPERIENCE, ORGANIZATION
    if (wScroll > $('.row.about-main').offset().top - 350) {
        $('.col.edu').each(function(i) {
            setTimeout(function() {
                $('.col.edu').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
        $('.col.exp').each(function(i) {
            setTimeout(function() {
                $('.col.exp').eq(i).addClass('show');
            }, 500 * (i + 1))
        })
        $('.col.org').each(function(i) {
            setTimeout(function() {
                $('.col.org').eq(i).addClass('show');
            }, 700 * (i + 1))
        })
    }
});