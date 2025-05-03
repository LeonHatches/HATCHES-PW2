
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {

	let lista = mostrarConfirmados(xhttp);
	document.getElementById("Lista").innerHTML = lista;

}
xhttp.open("GET", "data.JSON");
xhttp.send();

function mostrarConfirmados (xhttp) {

	for (let i = 0 ; i < length ; i++ ) {

	}

}