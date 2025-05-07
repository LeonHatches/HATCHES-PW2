
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

		agregarDatos(data);
	}
}

function agregarDatos (data) {
	
	const Row = [];
	
	for (let i = 0 ; i < data.length ; i++) {
		grafico.addColumn("number", data[i].region);
	}
	
	// Agrega las fechas
	for (let i = 0 ; i < 1 ; i++) {
		for (let j = 0 ; j < data[i].confirmed.length ; j++) {
			Row.push( [data[i].confirmed[j].date] );
		}
	}

	// Agrega los datos de contagios
	for (let i = 0 ; i < data.length ; i++) {
		for (let j = 0 ; j < data[i].confirmed.length ; j++) {
			Row[j].push( parseInt(data[i].confirmed[j].value) );
		}
	}
}