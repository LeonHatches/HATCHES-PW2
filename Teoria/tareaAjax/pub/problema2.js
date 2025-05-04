
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

	const boton = "<br><button onclick='crecimiento()'>Ver</button>"
	let lista = "<select id = 'region'>";
	lista += crearOptions();

	document.getElementById("lista").innerHTML = lista;
	document.getElementById("boton").innerHTML = boton;
}

function crearOptions () {
	let lista = "";

	for (let i = 0 ; i < data.length ; i++) {
		if (data[i].region != "Callao" && data[i].region != "Lima")
			lista += "<option value='" + i + "'>" + data[i].region + "</option>";
	}

	lista += "</select>";
	return lista;
}

function crecimiento () {
	
	// Los datos del Select
	let region = document.getElementById("region").value;
	region = parseInt(region);

	// API de Google Charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart () {

		// Grafico
	  var grafico = new google.visualization.DataTable();
	  grafico.addColumn("string", "Fecha");
	  grafico.addColumn("number", "Contagios");

    agregarDatos(grafico, region);

    // Opciones
		var options = {'title':'Gráfico Comparativo de Crecimiento por Fechas de '+data[region].region,
									 'width':1300,
									 'height':500};

		var chart = new google.visualization.AreaChart(document.getElementById('grafico'));
        chart.draw(grafico, options);
	}
}

function agregarDatos (grafico, region) {

	for (let i = 0 ; i < data[region].confirmed.length ; i++) {
		grafico.addRow(
			[data[region].confirmed[i].date,
			 parseInt(data[region].confirmed[i].value)]
		)
	}
}