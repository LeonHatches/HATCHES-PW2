
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
		var grafico = google.visualization.DataTable();
	}

}

function encontrarArequipa (data) {

	for (let i = 0 ; i < data.length ; i++) {

		if (data[i].region == "Arequipa") {
			return data[i];
		}

	}
}