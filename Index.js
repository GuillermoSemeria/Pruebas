const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Leer todos los registros
app.get('/libros', (req, res) => {
    connection.query('SELECT * FROM libros', (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

app.listen(3000, () => {
    console.log('API escuchando en el puerto 3000');
  });