/*!
 Version: 1.6.0
 Author: Popov Nikolay
 Author Website: http://spoob.ru
 */
$(document).ready(function () { "use strict";
    /* loaded */

    /** Open modal window */
    $('[data-modal-target]').on('click', function (e) { e.preventDefault();
        var dataTarget = $(this).data('modalTarget');

        $('#modal-background')
            .addClass('opened')
            .data('modalOpen', dataTarget)
            .attr('data-modal-open', dataTarget);
        $('[data-modal-object="' + dataTarget + '"]').addClass('opened');
    });

    /** Close modal window */
    $('#modal-background, .modal-close').on('click', function () {
        var modalBackground = $('#modal-background');

        $('[data-modal-object="' + modalBackground.data('modalOpen') + '"]').removeClass('opened');
        modalBackground
            .removeClass('opened')
            .attr('data-modal-open', null);
    });
});