$( document).ready(function() {
    $("input").keydown(function(){
        contrasena = $('input:text').val();
        console.log(contrasena);
    });
});