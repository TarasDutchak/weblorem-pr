$(document).ready(function () {
    // 1й екран анімація
    $('.has-animation').each(function (index) {
        $(this).delay($(this).data('delay')).queue(function () {
            $(this).addClass('animate-in');
        });
    });

    // header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    if ($(this).scrollTop() > 40) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }


    // count numbers
    var isAlreadyRun = false;

    $(window).scroll(function () {

        $('.counter-show').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if (bottom_of_window > (bottom_of_object + 20)) {
                if (!isAlreadyRun) {
                    $('.count-number').each(function () {

                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
                isAlreadyRun = true;
            }
        });

    });

    // cases - slider
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.wlsliderwrapper').css('padding-left', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.wlsliderwrapper').css('padding-left', paddingContainer);
    });


    var swiper = new Swiper(".wlslider", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
          },
    });

    // language
    $('.current-lang').click(function(){
        $('.language-list').slideToggle();
    });

});

