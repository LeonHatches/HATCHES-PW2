
fetch("data.json")
	.then(res => res.json())
	.then(data =>
		mostrarGrafico(data)
	);

function mostrarGrafico (data) {

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(graficar);

	function graficar () {
		
	}
}