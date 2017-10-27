function IsGeoActive() {
    if ('geolocation' in navigator) {
        return true;

    }
    else{
        return false;
        }
}
IsGeoActive();


function success(pos) {
    var crd = pos.coords;
    console.log(crd.latitude,crd.longitude);
    uLantiLongi = crd.latitude + ',' + crd.longitude;
    return uLantiLongi;


}

function error(er) {
    codigoError = er.code;
    switch (er.code){
        case 1:
            console.log('Permission_Denied');
            break;

        case 2:
            console.log('Position_unavaliable');
            break;
        case 3:
            console.log('Timeout');
            break;
    }
}

function getPos() {
    if (IsGeoActive() == true){
        return navigator.geolocation.getCurrentPosition(success,error);
    }
    setInterval(getPos,5000);
}




function coordenadasIniciales() {
    return navigator.geolocation.getCurrentPosition(coordenadas);
}

function coordenadas(pos) {
    var coord = pos.coords;
    var latilongi = coord.latitude + ',' +  coord.longitude;
    return latilongi;
}
