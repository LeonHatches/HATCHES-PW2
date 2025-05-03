
document.addEventListener('DOMContentLoaded', function () {

	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function () {
		
		const data = JSON.parse(xhttp.responseText);
		crearSelect(xhttp, data);
		
	}

	xhttp.open('GET', '/data.json');
	xhttp.send();

});

function crearSelect (xhttp, data) {

}

function comparar () {
	
}