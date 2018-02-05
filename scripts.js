$(document).ready(function () { "use strict";

    // Prevent action on clicking on empty links
    $('a[href="#"]').on('click', function (e) { e.preventDefault(); });

});