// add and remove class for header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("body").addClass("header_scrolled");
    } else {
        $("body").removeClass("header_scrolled");
    }
});

// scroll page to top when click on the button
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#pageScrolled").addClass('show');

        } else {
            $("#pageScrolled").removeClass('show');
        }
    });
    $("#pageScrolled").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
    });
});

// client slider
var swiper = new Swiper(".client_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});


const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 1000,
                delay: 16,
            })
            el.classList.add('is-visible');
        }
    })
}

const IO = new IntersectionObserver(callback, { threshold: 0 })

const el = document.querySelector('#partner');
const el1 = document.querySelector('#teams');
const el2 = document.querySelector('#happyClient');
const el3 = document.querySelector('#serviced');

IO.observe(el);
IO.observe(el1);
IO.observe(el2);
IO.observe(el3);