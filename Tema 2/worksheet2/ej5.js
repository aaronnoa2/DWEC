var a = parseInt(prompt("variable a"));
var b = parseInt(prompt("variable b"));
var c = parseInt(prompt("variable c"));

var solucion1 = -(-b+(Math.sqrt((Math.pow(b,2)-(4*a*c))))/(2*a));
var solucion2 = -(-b-(Math.sqrt((Math.pow(b,2)-(4*a*c))))/(2*a));

alert("Primera solucion" + solucion1);
alert("Segunda solucion" + solucion2);