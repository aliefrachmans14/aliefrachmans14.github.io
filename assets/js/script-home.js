// PARALLAX EFFECT


$(window).scroll(function() {
    // JUMBOTRON
    var wScroll = $(this).scrollTop();

    $('.profile-photo img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    })
    $('.container.jumbo h2').css({
        'transform': 'translate(0px, ' + wScroll / 1.3 + '%)'
    })
    $('.container.jumbo h4').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    })
    $('.tombol-jumbo').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    })

    // MY SERVICES
    if (wScroll > $('.row.myService').offset().top - 350) {
        $('.card.card-service').each(function(i) {
            setTimeout(function() {
                $('.card.card-service').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
        $('.col.srv-heading').each(function(i) {
            setTimeout(function() {
                $('.col.srv-heading').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
    }

    // PORTFOLIO
    if (wScroll > $('.row-enam-heading').offset().top - 300) {
        $('.thumbnail__container').each(function(i) {
            setTimeout(function() {
                $('.thumbnail__container').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
        $('.row-enam-heading').each(function(i) {
            setTimeout(function() {
                $('.row-enam-heading').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
    }

    // ABOUT
    if (wScroll > $('.row.about-me').offset().top - 350) {
        $('.col-lg.left').addClass('show');
        $('.col-lg.right').addClass('show');
    }

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

    // MY EXP
    if (wScroll > $('.timeline-heading').offset().top - 350) {
        $('.direction-r').addClass('show');
        $('.direction-l').addClass('show');
        $('.timeline-heading').each(function(i) {
            setTimeout(function() {
                $('.timeline-heading').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
    }

    // CONTACT
    if (wScroll > $('.row.contact-heading').offset().top - 350) {
        $('.col.contact-left').addClass('show');
        $('.col.contact-right').addClass('show');
        $('.row.contact-heading').each(function(i) {
            setTimeout(function() {
                $('.row.contact-heading').eq(i).addClass('show');
            }, 300 * (i + 1))
        })
    }
});