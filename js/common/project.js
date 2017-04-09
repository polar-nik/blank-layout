jQuery(document).ready(function () {

    $('.mp-slider').slick();
    $('.partners.slider, .clients.slider').slick({
        slidesToShow: 5
    });

    $('.fancybox').fancybox();

    // Calculator
    if ('.calculator') {

        var distCost = $('#c_distance_price').text().replace(/\D+/g, '');

        function calcOpts() {

            var totalPrice = 0;

            $('.calculator .w60').each(function () {

                var input = $(this).children('input[type="checkbox"]'),
                    price = Number($(this).next().text().replace(/\D+/g, ''));

                if(input.is(':checked')) { totalPrice = totalPrice + price; }

            });

            $('.calculator .total span').text(totalPrice);

        }

        $('#c_distance_field').keyup(function () {
            var dist = $(this).val().replace(/\D+/g, ''),
                distPrice = dist * distCost;

            $(this).parent().next().text(distPrice + ' руб');

            calcOpts();
        });

        $('.calculator').on('click', 'input[type="checkbox"]', calcOpts);

    }

    $('.modal').on('click', function () {

        $('body').prepend('<div id="modal-background"></div>');

        $('#' + $(this).data('modal')).show();
    });
    $('body').on('click', '#modal-background', function () {
        $('.modal-window').hide();
        $(this).remove();
    })
});