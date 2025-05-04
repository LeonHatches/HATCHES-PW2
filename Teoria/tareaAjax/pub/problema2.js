
// Obtener los datos
let data;

document.addEventListener('DOMContentLoaded', function () {

	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function () {
		data = JSON.parse(xhttp.responseText);	
		crearSelect();
	}

	xhttp.open('GET', 'data.json');
	xhttp.send();

});

function crearSelect () {

	let lista = "<select id = 'region'>";
	lista += crearOptions();

	document.getElementById("lista").innerHTML = lista;
}

function crearOptions () {
	let lista = "";

	for (let i = 0 ; i < data.length ; i++) {
		lista += "<option value='" + i + "'>" + data[i].region + "</option>";
	}

	lista += "</select>";
	return lista;
}