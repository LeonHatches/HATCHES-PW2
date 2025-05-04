
const path    = require('path');
const express = require('express');
const app     = express();
app.use(express.static('pub'));

app.listen(3000, () => {
  console.log("Escuchando en: http://localhost:3000");
});

app.get('/', (request, response) => {
  const index = `
    <!DOCTYPE html>
    <html>
    	<body>
      	<h1>Lista de Problemas Resueltos</h1>
      	<a href="http://localhost:3000/problema1.html">Problema 1</a>
  	<a href="http://localhost:3000/problema2.html">Problema 2</a>
    	</body>
    </html>
  `;

  response.send(index);
});

app.get('/data.json', (request, response) => {
  const data = require('data.JSON');
  response.json(data);
});
