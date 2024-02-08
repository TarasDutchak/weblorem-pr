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


    var swiper = new Swiper(".wlslider.s1", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },

            575: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3.1,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 3.3,
                spaceBetween: 30,
            },
        },
    });

    // language
    if ($(window).width() > 991) {
        $('.current-lang').click(function () {
            $('.language-list').slideToggle();
        });
    }



    $('.menubtn').click(function () {
        $('.mobmenu').addClass('show');
    })

    $('.closemenu').click(function () {
        $('.mobmenu').removeClass('show');
    })


    // CASES
    $('.sidebarbox .title').click(function(){
        $(this).next('.sidebarbox__selects').slideToggle();
        $(this).parent().toggleClass('show');
    });


    var swiper = new Swiper(".wlslider.s2", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            575: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });



    // МАСКА
    $('.telinput').inputmask({
        "mask": "+ 389999999999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });





});

if ($('.orderconsultation').length) {
    var app = {
        // chars: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        chars: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', ',', '.', '/', '<', '>', '?', '~', '\\', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

        init: function () {
            app.container = document.createElement('div');
            app.container.className = 'animation-container';

            // Отримуємо елемент з класом orderconsultation
            var orderConsultationElements = document.querySelectorAll('.orderconsultation');

            // Перевірка, чи знайдено елементи з класом orderconsultation
            if (orderConsultationElements.length > 0) {
                // Додаємо контейнер в кожен елемент з класом orderconsultation
                orderConsultationElements.forEach(function (element) {
                    element.appendChild(app.container);
                });
            } else {
                // Якщо елементи не знайдено, додаємо контейнер в кінець body
                document.body.appendChild(app.container);
            }

            window.setInterval(app.add, 100);
        },

        add: function () {
            var element = document.createElement('span');
            app.container.appendChild(element);
            app.animate(element);
        },

        animate: function (element) {
            var character = app.chars[Math.floor(Math.random() * app.chars.length)];
            var duration = Math.floor(Math.random() * 15) + 1;
            var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
            var size = 10 + (15 - duration);
            element.style.cssText = 'right:' + offset + 'vw; font-size:' + size + 'px;animation-duration:' + duration + 's';
            element.innerHTML = character;
            window.setTimeout(app.remove, duration * 1000, element);
        },

        remove: function (element) {
            element.parentNode.removeChild(element);
        },
    };

    document.addEventListener('DOMContentLoaded', app.init);

}

