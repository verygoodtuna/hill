$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    const DoorSlide = new Swiper ('.door_slide', {
        loop: true,
    });

    $('.premium8_slide').slick ({
        arrows:false,
        slidesToShow: 4,
        slideScroll: 4,
        autoplay: true,
        autoSpeed: 2000,
        infinite: true,
    })

    $('.unit_slide').slick ({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
    })
})