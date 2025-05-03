
document.addEventListener('DOMContentLoaded', function () {

	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function () {	
		crearSelects(xhttp);
	}

	xhttp.open('GET', 'data.json');
	xhttp.send();

});

function crearSelects (xhttp) {

	var data = JSON.parse(xhttp.responseText);
	let lista1 = "<select id = 'region1'>";
	let lista2 = "<select id = 'region2'>";
	const boton = "<br><button onclick='comparar()'>Comparar</button>";

	lista1 += crearOptions(data);
	lista2 += crearOptions(data);

	document.getElementById("lista1").innerHTML = lista1;
	document.getElementById("lista2").innerHTML = lista2;
	document.getElementById("botonComparar").innerHTML = boton;
}

function crearOptions (data) {
	let lista = "";

	for (let i = 0 ; i < data.length ; i++) {
		lista += "<option value='" + data[i].region + "'>" + data[i].region + "</option>";
	}

	lista += "</select>";
	return lista;
}


function comparar () {

	// Los datos del Select
	region1 = document.getElementById("region1").value;
	region2 = document.getElementById("region2").value;

	// API de Google Charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	// Grafico
	var grafico = new google.visualization.DataTable();
	grafico.addColumn('string', 'Topping');
	grafico.addColumn('number', 'Slices');
}