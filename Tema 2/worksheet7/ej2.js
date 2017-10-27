function nuevoMapa(position) {

    var ayala = {lat: position.coords.latitude, lng: position.coords.longitude};
    var mapa = new google.maps.Map(document.getElementById('mapaHTML'), {
        zoom: 15,
        center: ayala,
    });

    var marker = new google.maps.Marker({
        position: ayala,
        map: mapa,
    });


    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    geocoder.geocode({'location': ayala}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                mapa.setZoom(14);

                var marker = new google.maps.Marker({
                    position: ayala,
                    map: mapa,
                });

                infowindow.setContent(results[1].formatted_address);
                infowindow.open(mapa, marker);
            }
        }

    })
}

function initAll() {
    navigator.geolocation.getCurrentPosition(nuevoMapa);
}