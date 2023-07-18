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

    const PremiumSlide = new Swiper ('.premium8_slide', {
        loop: true,
        //freeMode: true,
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
        
    });

    const UnitSlide = new Swiper ('.unit_slide', {
        loop: true,
        slidesPerView: '3',
        slidesPerGroup: '3',
        spaceBetween: 15,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //   },
        loopAdditionalSlides : 1,
        freeMode : false,
        autoHeight : true,
    })
})