
const path    = require('path');
const express = require('express');
const app     = express();
app.use(express.static('pub'));

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000");
});

app.get('/problema1.html', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'problema1.html'))
});

app.get('/data.json', (request, response) => {
	const data = require('data.JSON');
  response.json(data);
});