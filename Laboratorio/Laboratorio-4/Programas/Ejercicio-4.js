
fetch("data.json")
	.then(res => res.json())
	.then(data =>
		mostrarGrafico(data)
	);

function mostrarGrafico (data) {
	console.log(data);
}