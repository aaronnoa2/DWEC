class tablero {
    constructor() {
        this.matrizXeY = this.generarMatriz();
        this.generarMinas();
        //this.generarNumeros();
        this.bombasAlrededor();
    }

    generarMinas() {
        for (let i = 0; i < 10; i++) {
            let coordenadaX = Math.floor(Math.random() * 7);
            let coordenadaY = Math.floor(Math.random() * 7);
            this.matrizXeY[coordenadaX][coordenadaY] = 'X';
        }
        console.log(this.matrizXeY);
    }

    generarMatriz() {
        var matrix = [];
        for (let i = 0; i < 8; i++) {
            matrix[i] = [];
            for (let j = 0; j < 8; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }


    bombasAlrededor(){
        for(var i = 0; i < 8; i ++){
            for(var j = 0; j < 8; j++){
                if (this.matrizXeY[i][j] == 'X'){
                    if (i == 0 && j == 0){
                        this.coloca(i,j, i+1, j+1);
                    }
                    else if( i == 0 && (j > 0 && j <7)){
                        this.coloca(i,j - 1,i + 1, j + 1);
                    }
                    else if (i == 0 && j ==7){
                        this.coloca(i,j -1, i +1 ,j);
                    }
                    else if (j ==7 &&(i > 0 && i < 7)){
                        this.coloca(i - 1,j - 1, i + 1, j);
                    }
                    else if (i == 7 && j == 7){
                        this.coloca(i - 1, j - 1, i,j);
                    }
                    else if (i == 7 && (j > 0 && j < 7)){
                        this.coloca(i - 1,j - 1,i, j + 1);
                    }
                    else if (i == 7 && j == 0){
                        this.coloca(i - 1, j, i,j + 1);
                    }
                    else if (j == 0 && (i > 0 && i > 7)){
                        this.coloca(i -1, j, i +1 , j + 1);
                    }
                    else{
                        this.coloca(i - 1, j -1, i + 1, j + 1);
                    }
                }
            }
        }
    }

    coloca(vari,varj,fini,finj){
        for(var i = vari; i <= fini; i++){
            for(var j = varj; j<= finj; j++){
                if(this.matrizXeY[i][j] != 'X'){
                    this.matrizXeY[i][j] += 1;
                }
            }
        }
    }

    abrirCeros(vari,varj,fini,finj,cori,corj){
        for(var i = vari; i <= fini; i++){
            for(var j = varj; j <= finj; j++){
                if(this.matrizXeY[i][j] == 0){
                    if(i == cori && j == corj){
                        this.matrizXeY[i][j] = 'W';
                    }
                    else{
                        this.abrirCelda(i,j);
                    }
                }
                else{
                    if(this.matrizXeY[i][j] != 'X'){
                        this.matrizXeY[i][j] = 'V';
                    }
                }
            }
        }
    }

    abrirCelda(xi,xj){
        if(xi == 0 && xj == 0){
            this.abrirCeros(xi, xj, xi + 1, xj + 1, xi, xj);
        }
        else if(xi == 0 && (xj > 0 && xj < 7)){
            this.abrirCeros(xi, xj - 1, xi + 1, xj + 1, xi, xj);
        }
        else if(xi == 0 && xj == 7){
            this.abrirCeros(xi, xj - 1, xi + 1, xj, xi, xj);
        }
        else if(xj == 7 && (xi > 0 && xi < 7)){
            this.abrirCeros(xi - 1, xj - 1, xi + 1, xj, xi, xj);
        }
        else if(xi == 7 && xj == 7){
            this.abrirCeros(xi - 1, xj - 1, xi, xj, xi, xj);
        }
        else if(xi == 7 && (xj > 0 && xj < 7)){
            this.abrirCeros(xi - 1, xj - 1, xi, xj + 1, xi, xj);
        }
        else if(xi == 7 && xj == 0){
            this.abrirCeros(xi - 1, xj, xi, xj + 1, xi, xj);
        }
        else if(xj == 0 && (xi > 0 && xi < 7)){
            this.abrirCeros(xi - 1, xj, xi + 1, xj + 1, xi, xj);
        }else{
            this.abrirCeros(xi - 1, xj - 1, xi + 1, xj + 1, xi, xj);
        }
    }
}
var tiempesito = 180;
function tiempo() {
    tiempesito--;
    console.log(tiempesito);
    if (tiempesito > 0){

        setTimeout(tiempo,1000);
    }

}

buscaminas = new tablero();
//tiempo();

