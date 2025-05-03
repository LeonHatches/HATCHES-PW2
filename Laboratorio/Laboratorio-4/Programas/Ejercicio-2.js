
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

	let lista = mostrarConfirmados(xhttp);
	document.getElementById("Lista").innerHTML = lista;

}
xhttp.open("GET", "data.JSON");
xhttp.send();

function mostrarConfirmados (xhttp) {
	
	let lista = "<ul>";
	const pais = JSON.parse(xhttp.responseText);

	for (let i = 0 ; i < pais.length ; i++ ) {
		lista += "<li>" + pais[i].region + ": " + pais[i].confirmed[pais[i].confirmed.length - 1].value + "</li>";
	}

	lista += "</ul>";

	return lista;
}
