
// Obtener los datos
let data;

document.addEventListener('DOMContentLoaded', function () {

	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function () {
		data = JSON.parse(xhttp.responseText);	
		crearSelects(xhttp);
	}

	xhttp.open('GET', 'data.json');
	xhttp.send();

});

function crearSelects (xhttp) {

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
		lista += "<option value='" + i + "'>" + data[i].region + "</option>";
	}

	lista += "</select>";
	return lista;
}


function comparar () {

	// Los datos del Select
	let region1 = document.getElementById("region1").value;
	let region2 = document.getElementById("region2").value;
	region1 = parseInt(region1);
	region2 = parseInt(region2);
	let ultimoDato1 = data[region1].confirmed.length - 1;
	let ultimoDato2 = data[region2].confirmed.length - 1;

	// API de Google Charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	
	// Grafico
	var grafico = new google.visualization.DataTable();
	grafico.addColumn('string', 'Topping');
	grafico.addColumn('number', 'Slices');
	grafico.addRows([
		[data[region1].region, data[region1].confirmed[ultimoDato1].value],
		[data[region2].region, data[region2].confirmed[ultimoDato2].value]
	]);

	// Opciones
	var options = {'title':'Gráfico Comparativo de la última fecha de Confirmados', 'width':400, 'height':300};
}