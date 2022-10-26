$(function() {

    $('.slider_container').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        appendDots: $('.slider_inicator'),
        arrows: false,
        draggable: false,
        waitForAnimate: false,
        appendArrows: $('slider_arrows'),
        responsive:
        [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    })
    $('.slider_arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.slider_container').slick('slickPrev')
    })
    $('.slider_arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.slider_container').slick('slickNext')
    })

    $('.faq_clicabel-zone').on('click', function (e){
        e.preventDefault()
        $(this).contents().find('.faq_acc-btn').toggleClass('faq_acc-btn_acrive')
        $(this).children('.faq_acc-text').slideToggle()    
    })

    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header_top').toggleClass('header_top--open')
        $('.burger span').toggleClass('burger--open')
        $('.overlay').toggleClass('overlay--open')
        $('.burger').toggleClass('burger_back--open')
    })

    $(window).on('scroll', function () {
        
        if ($(window).scrollTop() > 0) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    })

})