/*$(window).scroll(function(){
    $('#header-inner').toggleClass(
        'scrolling',
        $(window).scrollTop() > $('#header').offset().top
    );
});*/


var topTrigger = 70;
$(window).on('scroll', function() {
    var y = window.pageYOffset;
    if(y >= topTrigger) {
        $('.header-inner').addClass('scrolling');
        //window.scroll(0, y); // produces safari flickering
    } else {
        $('.header-inner').removeClass('scrolling');
    }
});