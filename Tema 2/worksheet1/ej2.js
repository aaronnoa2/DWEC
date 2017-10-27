fechaHoy = new Date();

document.write(fechaHoy);

var fecha85 = new Date(fechaHoy.setDate(fechaHoy.getDate() + 85));
document.write('<br>' + fecha85);

var fecha187 = new Date(fechaHoy.setDate(fechaHoy.getDate() - 187));
document.write('<br>' + fecha187);

var sumarDosAnos = new Date(fechaHoy.setFullYear(fechaHoy.getFullYear() + 2));
document.write('<br>' + sumarDosAnos);

var restar24Horas = new Date(fechaHoy.setHours(fechaHoy.getHours() -24));
document.write('<br>' + restar24Horas);

var fechaResto = new Date(fecha85.setDate(fecha85.getDate() - fecha187.getDate()))
document.write('<br>' + fechaResto);