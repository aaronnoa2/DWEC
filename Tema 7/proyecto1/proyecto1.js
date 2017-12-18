div_id = 0;

var titulos = [];

var imagenes = [];

function aumentar_id() {
    div_id += 1;
}

function CrearDivs() {
    for(i = 0;i < 9; i++){
    var div = $("<div></div>").attr("id",'' + div_id);
    var img = $("<img>").attr("src",'' + imagenes[i]);
    div.append(img);
    aumentar_id();
    $('#contenido').append(div);
    }
}

$(document).ready(function () {
    $('#boton').click(function () {

        $.ajax({
            url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + 1,
            success: function (html) {
                for(i = 0;i < html['Search'].length;i++){
                    imagenes.push(html['Search'][i].Poster)
                }
                CrearDivs();
            }
        });
    })
});