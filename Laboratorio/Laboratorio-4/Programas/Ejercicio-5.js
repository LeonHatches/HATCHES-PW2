
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
	
	const Rows = [];
	
	for (let i = 0 ; i < data.length ; i++) {
		grafico.addColumn("number", data[i].region);
	}
	
	for (let j = 0 ; j < data[i].confirmed.length ; j++) {
		Rows.push();
	}
}