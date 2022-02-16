'use strict';

(function ($) {

    /*------------------
        Radio btn
    --------------------*/
    $(".boton__doble label").on('click', function (e) {
        $(".boton__doble label").removeClass("active");
        $(this).addClass("active");

        if(e.target.htmlFor == 'month') {
            $(".yearly__plans").removeClass('active');
            $(".plans__month").addClass('active');
        } else if (e.target.htmlFor == 'yearly') {
            $(".plans__month").removeClass('active');
            $(".yearly__plans").addClass('active');
        }     
    });

})(jQuery);
