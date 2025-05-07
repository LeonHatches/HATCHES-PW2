
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
			hAxis: { title: "Días" },
			vAxis: { title: "Confirmados" },
			"title": "Gráfico Comparativo entre Regiones por Día del Perú",
			"width": 4000,
			"height": 2000
		};

		var mostrar = new google.visualization.LineChart(document.getElementById("Grafico"));
		mostrar.draw(grafico, options);
	}
}

function agregarDatos (grafico, data) {
	
	const Rows = [];
	let dato1, dato2;

	for (let i = 0 ; i < data.length ; i++) {
		
		if (data[i].region != "Callao" && data[i].region != "Lima") {
			grafico.addColumn("number", data[i].region);
		}
	}
	
	// Agrega las fechas
	for (let i = 0 ; i < 1 ; i++) {
		
		for (let j = 0 ; j < data[i].confirmed.length - 1 ; j++) {
			Rows.push( [`${j + 1}`] );
		}
	}

	// Agrega los datos de contagios
	for (let i = 0 ; i < data.length ; i++) {
		
		if (data[i].region != "Callao" && data[i].region != "Lima") {
			
			for (let j = 0 ; j < data[i].confirmed.length - 1 ; j++) {
				
				dato1 = parseInt(data[i].confirmed[j].value);
				dato2 = parseInt(data[i].confirmed[j+1].value);

				Rows[j].push(dato2 - dato1);
			}
		}
	}

	grafico.addRows(Rows);
}
