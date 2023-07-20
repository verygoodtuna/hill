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

    $('.menu_btn').on('click', function () {
      $('.header .gnb').toggleClass('on');
    })

    // $('.gnb ul>li>a').on('click', function () {
    //   $('.gnb ul>li .lnb').toggleClass('on');
    // })

    $('.gnb ul>li .gnb_list').on('click', function (e) {
      if ($('.gnb').hasClass('on')) {

          //서버메뉴가 없으면 바로 클릭되게 하기
          if ($(this).next().size() != 0) {
              e.preventDefault();
          }
          $(this).next().stop().slideToggle();
          $(this).parent().siblings().find('.lnb').stop().slideUp();
      }
    });

    $('.gnb').on('wheel', function (e) {
      if ($('.gnb .lnb').hasClass('on')) {
        e.preventDefault();
      }
      else {
          e.preventDefault();
      }
    })

    $('.premium8_slide').slick ({
        arrows:false,
        slidesToShow: 4,
        slideScroll: 4,
        autoplay: true,
        autoSpeed: 2000,
        infinite: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            }
        ]
    })

    $('.unit_slide').slick ({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    })
})