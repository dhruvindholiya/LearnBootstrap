$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("body").addClass("header_scrolled");
    } else {
        $("body").removeClass("header_scrolled");
    }
}); //missing ); 

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

