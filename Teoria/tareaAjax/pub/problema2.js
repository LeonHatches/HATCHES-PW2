
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
	comparar();
}

function crearOptions () {
	let lista = "";

	for (let i = 0 ; i < data.length ; i++) {
		lista += "<option value='" + i + "'>" + data[i].region + "</option>";
	}

	lista += "</select>";
	return lista;
}

function comparar () {
	
	// Los datos del Select
	let region = document.getElementById("region").value;
	region = parseInt(region);

	// API de Google Charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart () {

		// Grafico
	  var grafico = google.visualization.arrayToDataTable([
	  	['Fecha', 'Contagios']
    ]);

    grafico = agregarDatos(grafico, region);

    // Opciones
		var options = {'title':'Gráfico Comparativo de Crecimiento por Fechas',
									 'opacity':0,
									 'width':600,
									 'height':500};

		var chart = new google.visualization.AreaChart(document.getElementById('grafico'));
        chart.draw(grafico, options);
	}
}

function agregarDatos (grafico, region) {

	for (let i = 0 ; data[region].confirmed.length ; i++) {
		grafico.addRow(
			[data[region].confirmed[i].date,
			 parseInt(data[region].confirmed[i].value)]
		)
	}
}