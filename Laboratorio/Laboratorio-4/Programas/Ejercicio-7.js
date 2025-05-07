
// Obtener los datos
let data;

document.addEventListener('DOMContentLoaded', function () {

	fetch("data.json")
	.then(res => res.json())
	.then(dat =>
		crearSelects(dat)
	);

});

function crearSelects (dat) {

	data = dat;

	let lista1 = "<select id = 'region1'>";
	let lista2 = "<select id = 'region2'>";
	const boton = "<br><button onclick='comparar()'>Comparar</button>";

	lista1 += crearOptions();
	lista2 += crearOptions();

	document.getElementById("lista1").innerHTML = lista1;
	document.getElementById("lista2").innerHTML = lista2;
	document.getElementById("botonComparar").innerHTML = boton;
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
	let region1 = document.getElementById("region1").value;
	let region2 = document.getElementById("region2").value;
	region1 = parseInt(region1);
	region2 = parseInt(region2);
	let ultimoDato1 = data[region1].confirmed.length - 1;
	let ultimoDato2 = data[region2].confirmed.length - 1;

	// API de Google Charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart () {

		// Grafico
		var grafico = new google.visualization.DataTable();
		grafico.addColumn('string', 'Topping');
		grafico.addColumn('number', 'Slices');
		grafico.addRows([
			[data[region1].region, parseInt(data[region1].confirmed[ultimoDato1].value)],
			[data[region2].region, parseInt(data[region2].confirmed[ultimoDato2].value)]
		]);

		// Opciones
		var options = {'title':'Gráfico Comparativo de la última fecha de Confirmados',
									 'width':600,
									 'height':500};
		
		var chart = new google.visualization.PieChart(document.getElementById("grafico"));
		chart.draw(grafico, options);
	}
}