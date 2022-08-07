$('.hits-slider').slick({
    slidesToShow: 6,
    appendArrows: '.hits-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.reviews-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();


// fixed sidebar

$(window).on('load resize', function() {
    if ($(window).width() > 1100) {
        $(function () {
            var topPos = $('.sidebar-order').offset().top;
            $(window).scroll(function () {
                var top = $(document).scrollTop(),
                    pip = $('.banner, .question, .popular, .reviews, footer, .advantages, .original-soft').offset().top,
                    height = $('.sidebar-order').outerHeight();
                if (top > topPos && top < pip - height) {
                    $('.sidebar-order').addClass('fixed').removeAttr("style");
                } else if (top > pip - height) {
                    $('.sidebar-order').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
                } else {
                    $('.sidebar-order').removeClass('fixed');
                }
            });
        });
    }
});



