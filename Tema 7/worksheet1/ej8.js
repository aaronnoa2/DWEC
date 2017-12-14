$(document).ready(function() {
    $('p').css('font-size','300%');

    $('h1').hover(function () {
        $(this).hide()
    })

    $('h1').mouseout(function () {
        $(this).show()
    })

    $('p').hover(function () {
        $(this).css('background-color','red')
    })

    $('p').mouseout(function () {
        $(this).css('background-color','white')
    })

});
