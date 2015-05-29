(function($) {
    // Controla que el header se mantenga en el tope
    var topTrigger = 30;
    $(window).on('scroll', function() {
        var y = window.pageYOffset;
        if(y >= topTrigger) {
            $('.header-inner').addClass('scrolling');
            //window.scroll(0, y); // produces safari flickering
        } else {
            $('.header-inner').removeClass('scrolling');
        }
    });

    // controles del menuslider
    $('a.menu').sidr({  // responde al link de clase menu
        name: 'menuslider',
        displace: false,
        onOpen: function() {
            // al abrir el menu se muestra visible
            $('#menuslider').data('visible', true);
        },
        onClose: function() {
            // al cerrar el menú se esconde
            $('#menuslider').data('visible', false);
        }
    });

    // close menuslider if it is opened
    function autoCloseMenuSliders() {
        if ($('#menuslider').data('visible') === true) {
            if(!$(event.target).closest('#menuslider').length) {
                $.sidr('close', 'menuslider');
            }
        }
        if ($('#menuslider-user').data('visible') === true) {
            if(!$(event.target).closest('#menuslider-user').length) {
                $.sidr('close', 'menuslider-user');
            }
        }
    }

    // if page is clicked
    $('html').click(function(event) {
        autoCloseMenuSliders();
    });

    // if ESC key is pressed
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            autoCloseMenuSliders();
        }
    });

    // Cambiar slider del index
    var roles = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
        'Accusantium aliquam, amet aspernatur consectetur doloremque esse, ex explicabo inventore.',
        'Iusto nemo obcaecati perferendis quia quisquam quod sed. Dolor excepturi nesciunt saepe!'];
    var counter = 0;
    var $contenido = $('.contenido-index');
    setInterval(function(){
        $contenido.text(roles[counter++]);
        if(counter >= roles.length){
            counter = 0;
        }
    }, 2000);

})(jQuery);