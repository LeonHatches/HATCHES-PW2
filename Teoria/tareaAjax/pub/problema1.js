
document.addEventListener('DOMContentLoaded', function () {

	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function () {	
		crearSelect(xhttp);
	}

	xhttp.open('GET', './data.json');
	xhttp.send();

});

function crearSelect (xhttp) {

	const data = JSON.parse(xhttp.responseText);
	let lista = "<select>";

	for (let i = 0 ; i < data.length ; i++) {
		lista += "<option value='" + data[i].region + "'>" + data[i].region + "</option>";
	}

	lista += "<br><button onclick='comparar()'></button>";
	
	document.getElementById("regiones").innerHTML = lista;
}

function comparar () {

}