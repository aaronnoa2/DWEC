div_id = 0;

var titulos = [];

var pagina = 1;

var imagenes = [];

en_peticion = false;

ultimo = 0;

function resetearVariables() {

    titulos = [];

    pagina = 1;

    imagenes = [];

    ultimo = 0;

    en_peticion = false;
}


function aumentar_id() {
    div_id += 1;
}

function CrearDivs(html) {
    for(i = ultimo;i < html['Search'].length; i++){
        imagenes.push(html['Search'][i].Poster);

        var div = $("<div></div>").attr("id",'' + div_id).css('text-align','center');
        var img = $("<img>").attr("src",'' + imagenes[i]);
        var titulo = $('<h2>' + html["Search"][i].Title + '</h2>').css('text-align','center');

        div.append(titulo);
        div.append(img);
        aumentar_id();
        $('#contenido').append(div);
    }
    ultimo = imagenes.length;
    imagenes = [];
    titulos = [];
}

function buscarPelis() {
    $('#boton').click(function () {

        $('#contenido').empty();
        resetearVariables();

        if(en_peticion === false){
            en_peticion = true;
            filtro = $('#filtrar').val();
            $.ajax({
            url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + pagina + '&type=' + filtro + '',
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

        if ($(document).height() - win.height() <= (win.scrollTop() + 800) ) {
            if(en_peticion === false){
                filtro = $('#filtrar').val();
                en_peticion = true;
                $.ajax({
                url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + pagina + '&type=' + filtro + '',
                success: function(html) {
                    console.log(html);
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