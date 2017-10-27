var contador = 60;
var i = 0;
function cuentaAtras() {
    if (i < contador){
        console.log(contador);
        contador--;
    }
    setTimeout(cuentaAtras,1000);
}
cuentaAtras();