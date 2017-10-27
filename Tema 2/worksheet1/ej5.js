function reloj() {
    var fecha = new Date();
    console.clear();
    console.log(fecha.getHours() + ':' +  fecha.getMinutes() + ':' +  fecha.getSeconds());
    setTimeout(reloj,1000);
}
reloj();