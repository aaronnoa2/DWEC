$( document ).ready(function() {
    $('#animar').click(function () {
        $('p').animate({
            'font-size':'80px',
            opacity:'0.5'

        },10000);
    });

    $('#stop').click(function () {
        $('p').stop()
    })
});