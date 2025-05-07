
fetch("data.json")
	.then(res => res.json())
	.then(data =>
		mostrarGrafico(data)
	);

function mostrarGrafico (data) {

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(graficar);

	function graficar () {

		var grafico = new google.visualization.DataTable();
		
		grafico.addColumn("string", "Fecha");

		agregarDatos(grafico, data);

		var options = {
			hAxis: { title: "Fecha" },
      vAxis: { title: "Contagios" },
			"title": "Gráfico Comparativo entre Regiones del Perú",
			"width": 1300,
			"height":3000
		};

		var mostrar = new google.visualization.LineChart(document.getElementById("Grafico"));
		mostrar.draw(grafico, options);
	}
}

function agregarDatos (grafico, data) {
	
	const Rows = [];
	
	for (let i = 0 ; i < data.length ; i++) {
		if (data[i].region != "Callao" && data[i].region != "Lima")
			grafico.addColumn("number", data[i].region);
	}
	
	// Agrega las fechas
	for (let i = 0 ; i < 1 ; i++) {
		for (let j = 0 ; j < data[i].confirmed.length ; j++) {
			Rows.push( [data[i].confirmed[j].date] );
		}
	}

	// Agrega los datos de contagios
	for (let i = 0 ; i < data.length ; i++) {
		if (data[i].region != "Callao" && data[i].region != "Lima")
			for (let j = 0 ; j < data[i].confirmed.length ; j++) {
				Rows[j].push( parseInt(data[i].confirmed[j].value) );
		}
	}

	grafico.addRows(Rows);
}