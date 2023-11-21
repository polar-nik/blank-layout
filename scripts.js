$(document).ready(function () { "use strict";

    // Prevent action on clicking on empty links
    $('a[href="#"]').on('click', function (e) { e.preventDefault(); });

    /**
     * Fancybox example
     */
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    /**
     * Swiper example
     */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});