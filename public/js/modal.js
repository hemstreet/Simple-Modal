(function ( $ ) {
    $( document ).ready( function () {

        var $underlay = $( '<div>' ).addClass( 'modal-underlay' ),
            $body = $('body');
        $body .append( $underlay );

        $( '.modal-link' ).on( 'click', function ( e ) {

            console.log('modal link clicked');
            e.preventDefault();

            $body.addClass( 'modal-open' );

            var key = $( this ).attr( 'data-modal-key' ),
                modal = $( '.modal[data-modal-key="' + key + '"]' );

            $body.append( modal );

            modal.css( 'display', 'block' );

            $underlay.css( 'display', 'block' );

            // Get height / width after we show the element
            //var height = modal.outerHeight(),
            //    width = modal.outerWidth(),
            //    styles = {
            //        'margin-top' : -height / 2,
            //        'margin-left' : -width / 2
            //    };
            //
            //modal.css( styles );

        } );

        $( '.modal-close' ).on( 'click', function ( e ) {
            console.log('closed modal');
            e.preventDefault();
            $body.removeClass( 'modal-open' );
            $( '.modal' ).css( 'display', 'none' );
            $underlay.css( 'display', 'none' );
        } );
    } );
}( jQuery ));