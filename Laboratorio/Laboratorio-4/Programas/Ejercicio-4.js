
fetch("data.json")
	.then(res => res.json())
	.then(data =>
		mostrarGrafico(data)
	);

function mostrarGrafico (data) {

	const AREQ = encontrarArequipa(data);

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(graficar);

	function graficar () {
		
		var grafico = new google.visualization.DataTable();
		
		grafico.addColumn("string", "Fecha");
		grafico.addColumn("number", "Contagios");

		for (let i = 0 ; i < AREQ.confirmed.length ; i++) {
			grafico.addRow([AREQ.confirmed[i].date, parseInt(AREQ.confirmed[i].value)]);
		}

		var options = {
			hAxis: { title: "Fecha" },
      vAxis: { title: "Contagios" },
			"title": "Grafico de Cambio con el Tiempo sobre Contagios en Arequipa",
			"width": 1300,
			"height": 500
		};

		var mostrar = new google.visualization.LineChart(document.getElementById("Grafico"));
		mostrar.draw(grafico, options);
	}

}

function encontrarArequipa (data) {

	for (let i = 0 ; i < data.length ; i++) {

		if (data[i].region == "Arequipa") {
			return data[i];
		}

	}
}