
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

	const Confirmados = crearArregloSuma(xhttp);
	let   lista       = devolverMayores (Confirmados);

	document.getElementById("Lista").innerHTML = lista;
}

xhttp.open("GET", "data.JSON");
xhttp.send();


function crearArregloSuma (xhttp) {
	
	const pais = JSON.parse(xhttp.responseText);
	const Confirmados = [];

	// Acceso a cada region
	for (let i = 0 ; i < pais.length ; i++) {
		
		let suma = 0;

		// Suma de los confirmados
		for (let j = 0 ; j < pais[i].confirmed.length ; j++) {
			suma += parseInt(pais[i].confirmed[j].value);
		}

		Confirmados.push({"region": pais[i].region, "total": suma});
	}

	return Confirmados;
}


function devolverMayores (Confirmados) {

	let lista = "<ol>";
	Confirmados.sort(function(a, b){return b.total - a.total});

	// Forma de Lista de los 10 mayor número de confirmados
	for (let i = 0 ; i < 10 ; i++) {
		lista += "<li>" + Confirmados[i].region + ": " + Confirmados[i].total + "</li>";
	}

	lista += "</ol>";
	return lista;
}