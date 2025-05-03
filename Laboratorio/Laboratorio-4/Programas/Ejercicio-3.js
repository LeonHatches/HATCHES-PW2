
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

	const Confirmados = crearArregloSuma(xhttp);
	let lista = devolverMayores (Confirmados);

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

		Confirmados.push({"region": pais[i].region, "Confirmados": suma});
	}

	// Se crea un arreglo con forma de [ {"region": ..., "Confirmados": ...} , ... ]
	// Se hará un for que sume cada uno de los confirmados de las fechas y luego
	// agregue al final del arreglo los objetos
}

function devolverMayores (Confirmados) {
	// Se hará un sort al valor de confirmado
	// Se hará un for para colocarlo en cadena y mostrarlo como lista ordenada
}