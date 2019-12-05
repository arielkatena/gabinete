function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: generateHTML,
    simpleSheet: true
  })
}

function generateHTML(data, tabletop) {
  showNames(tabletop.sheets("nombres").elements);
}

function showNames(data, tabletop) {

  var nombres = [];
  var datos1 = [];
  var datos2 = [];
  var datos3 = [];
  var imagenes = [];
  var filtros = [];
  var colores = [];

  for (var i = 0; i < data.length; i++) {

    // Push each value for "Nombre" into array
    var nombre = data[i]['Nombre'];
    nombres.push(nombre);

    // Same for "Dato1"
    var dato1 = data[i]['Dato1'];
    datos1.push(dato1);

    // Same for "Dato2"
    var dato2 = data[i]['Dato2'];
    datos2.push(dato2);

    // Same for "Dato3"
    var dato3 = data[i]['Dato3'];
    datos3.push(dato3);

    // Same for "Imagenes"
    var imagen = data[i]['Imagen'];
    imagenes.push(imagen);

    // Same for "Color"
    var color = data[i]['Color Fondo'];
    colores.push(color);
  }

  for (var i = 0; i < data.length; i++) {
    if (colores[i] === "") {
      colores[i] = "#DDE5EC";
    }

    $("#dataFiltro").append(
      "<div class='data grid-item " + filtros[i] + "'>" +
      "<img src='" + imagenes[i] + "' alt='" + nombres[i] + "' class='" + filtros[i] + "' style='background-color:" + colores[i] + "'>" +
      "<div class='data--head'><h2>" + nombres[i] + "</h2>" +
      "<p>" + datos1[i] + "</p></div>" +
      "<div class='data--body'><p>" + datos2[i] + "</p>" +
      "<p>" + datos3[i] + "</p></div>" +
      "</div>"
    );
  }


}

window.addEventListener('DOMContentLoaded', init);


