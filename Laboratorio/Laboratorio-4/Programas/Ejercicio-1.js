const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

	let lista = crearLista(xhttp);
	document.getElementById("Lista").innerHTML = lista;
}
xhttp.open("GET", "data.JSON");
xhttp.send();

function crearLista (xhttp) {
	
	const pais = JSON.parse(xhttp.responseText);
	let lista = "<ul>";

	for (let i = 0 ; i < pais.length ; i++ ) {
		lista += "<li>" + pais[i].region + "</li>";
	}

	lista += "</ul>";

	return lista;
}