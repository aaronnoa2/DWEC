div_id = 0;

var titulos = [];

var pagina = 1;

var imagenes = [];

en_peticion = false;

ultimo = 0;
/**
 * Restart the variables.
 */
function resetearVariables() {

    titulos = [];

    pagina = 1;

    imagenes = [];

    ultimo = 0;

    en_peticion = false;
}

/**
 * Increase the id in 1.
 */
function aumentar_id() {
    div_id += 1;
}

/**
 * Create a Div which has an img and a title for each movie that the program shows.
 */
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
/**
 * When you click in the search button this method call the API and seach all the movies which match with the name given
 */
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
                console.log(html);
                pagina += 1;
                en_peticion = false;
            }
        })}
    })
}
/**
 * This function makes that when you are scrolling movies load before you reach the end of the page ultil there are not more movies
 */
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