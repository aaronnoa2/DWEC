// Cabeceras mas pequeñas cada uno

for ( let step = 1; step <= 6; step++)
    document.write('<h' + step + '>' + 'Cabecera h' + step + '</h' + step + '>');

// numero de columnas

nColumnas = prompt('');

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>" + "<br>")
document.write("<tr bgcolor = 'red' height = '50'>")

for (step = 1; step <= nColumnas; step++){
    if (step % 2 == 0){
        document.write("<td width = '50' bgcolor = 'yellow'>&nbsp</td>")
    }
    else{
        document.write("<td width = '50' bgcolor = 'red'></td>")
    }
}

document.write("</tr>" + "<br>")
document.write("</table>" + "<br>")

//5.13

nColumnas = prompt('');

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>" + "<br>")
document.write("<tr bgcolor = 'red' height = '50'>")
var i = 1;
while (i < nColumnas){
    if (i % 2 == 0){
        document.write("<td width = '50' bgcolor = 'yellow'>&nbsp</td>")
    }
    else{
        document.write("<td width = '50' bgcolor = 'red'></td>")
    }
    i++;
}

document.write("</tr>" + "<br>")
document.write("</table>" + "<br>")

//5.15

function adivinaNumero(numero){
    
    do {
        num_adivinar = prompt('');
            if (num_adivinar < numero){
                alert('El número es mayor');
        }
            else if (num_adivinar > numero){
                alert('El número es menor');

        }
            else if (num_adivinar == numero){
                alert('Lo has adivinado muy bien tontico');
        }
        
       }
    
    while (numero != num_adivinar)
        
        
    }
adivinaNumero(20);

//5.17
    
function tablasMultiplicar(){
    for ( i =1; i <= 10; i++){
        document.write('<br>' + 'Tabla del ' + i + '<br>' + '<br>');
        for( e = 1; e <= 10; e++){
            document.write(i + ' X ' + e + ' = ' + (i*e) + '<br>');
            
        }
    }
}

tablasMultiplicar()

//5.18

function pintarTable(columnas,filas, ancho, alto){
		document.write("<table border=\"0\" cellspacing=\"3\" bgcolor=\"black\">");
		for (i = 1; i < (columnas + 1); i++){
			document.write("<tr bgcolor=\"white\" height=\"" + alto + "\">");
			for (j=1; j < (filas +1) ; j++){
				document.write("<td width=\"" + ancho + "\">&nbsp;</td>");
			}
			
		}
		document.write("</tr>");
		document.write("</table> <br>");
	}
	
//pintarTable(5,5,80,80);
    
//5.19
    function ajedrez(columnas,filas, altoAncho){
		document.write("<table border=\"0\" cellspacing=\"3\" bgcolor=\"black\">");
		for (i = 1; i < (columnas + 1); i++){
			document.write("<tr bgcolor=\"white\" height=\"" + altoAncho + "\">");
			for (j=1; j < (filas +1) ; j++){
                 ((i + j )% 2 == 1)
				    document.write("<td bgcolor='black' width=\"" + altoAncho + "\">&nbsp;</td>");
                else
                    document.write("<td bgcolor='white' width=\"" + altoAncho + "\">&nbsp;</td>");
                    
			}  
			
		}
		document.write("</tr>");
		document.write("</table> <br>");
        
        
	}
var altoAncho = parseInt(prompt("Introduce el ancho y el alto"));
	
ajedrez(5,5,altoAncho);

    
    
