
const path    = require('path');
const express = require('express');
const app     = express();

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000");
});

app.get('/problema1.html', (request, reponse) => {
	response.sendFile(path.resolve(_dirname, 'problema1.html'))
});