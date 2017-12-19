div_id = 0;

var titulos = [];

var pagina = 1;

var imagenes = [];

ultimo = 0;

en_peticion = false;

function aumentar_id() {
    div_id += 1;
}

function CrearDivs(html) {
    for(i = ultimo;i < html['Search'].length; i++){
        imagenes.push(html['Search'][i].Poster);

        var div = $("<div></div>").attr("id",'' + div_id);
        var img = $("<img>").attr("src",'' + imagenes[i]);

        div.append(img);
        aumentar_id();
        $('#contenido').append(div);
    }
    ultimo = imagenes.length;
    console.log(ultimo)
}

function buscarPelis() {
    $('#boton').click(function () {

        if(en_peticion === false){
            en_peticion = true;
            $.ajax({
            url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + pagina,
            success: function (html) {
                CrearDivs(html);
                pagina += 1;
                en_peticion = false;
            }
        })}

    })
}

function scrollInfinito() {
    var win = $(window);

    win.scroll(function() {

        if ($(document).height() - win.height() <= (win.scrollTop())+ 5 ) {
            if(en_peticion === false){
                en_peticion = true;
                $.ajax({
                url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + pagina,
                success: function(html) {
                    CrearDivs(html);
                    pagina+=1;
                    en_peticion = false;
                }
            })}

        }
    });
}
$(document).ready(function () {
    buscarPelis();
    scrollInfinito();
});