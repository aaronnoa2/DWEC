div_id = 0;

function aumentar_id() {
    div_id += 1;
}

function CrearDivs() {
    var div1 = $("<div></div>").attr("id",'' + div_id);
    var img1 = $("<img>");
    div1.append(img1);

    aumentar_id();

    var div2 = $("<div></div>").attr("id",'' + div_id);
    var img2 = $("<img>");
    div2.append(img2);

    aumentar_id();

    var div3 = $("<div></div>").attr("id",'' + div_id);
    var img3 = $("<img>");
    div3.append(img3);

    aumentar_id();

    $('#contenido').append(div1, div2, div3);
}

$(document).ready(function () {
    $('#boton').click(function () {

        $.ajax({
            url: "http://www.omdbapi.com/?s="+$('#pelicula').val()+"&apikey=31b14819&page=" + 1 + "&r=xml",
            success: function (html) {
                resultados = html.getElementsByTagName('result');
                console.log(resultados);
                CrearDivs();
            }
        });
    })
});