(function ($) {
    $(document).ready(function () {

        var underlay = $('.modal-underlay');

        $('.modal-link').on('click', function(e) {

            e.preventDefault();

            var key    = $(this).attr('data-modal-key'),
                modal  = $('.modal[data-modal-key="' + key + '"]');

            $('body').append(modal);

            underlay.css('display', 'block');

            modal.css('display', 'block');

            // Get height / width after we show the element
            var height = modal.outerHeight(),
                width  = modal.outerWidth(),
                styles = {
                    'margin-top'  : -height / 2,
                    'margin-left' : -width / 2
                };

            modal.css(styles);

        });

        $('.modal-close').on('click', function(e) {
            e.preventDefault();
            $('.modal').css('display', 'none');
            underlay.css('display', 'none');
        });
    });
}(jQuery));