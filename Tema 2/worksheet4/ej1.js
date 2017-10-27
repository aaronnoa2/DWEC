function navInfo() {
    document.write("<table border = 1>");
    document.write("<tr>");
    document.write("<td>" + navigator.battery + "</td>");
    document.write("<td>" + 'bateria' + " </td>");
    document.write("</tr>");

    document.write("<table border = 1>");
    document.write("<tr>");
    document.write("<td>" + navigator.geolocation + "</td>");
    document.write("<td>" + 'POSISION GEOGRAFICA ESPANOLA' + " </td>");
    document.write("</tr>");

    document.write("</table>");
}

navInfo();