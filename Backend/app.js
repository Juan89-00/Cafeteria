// servidor node
const express = require('express');
const path = require('path');
require('dotenv').config();

const pedidoRutas = require('./Rutas/pedidoRutas');
const app = express();

// leer los datos del formulario (POST)
app.use(express.urlencoded({ extended: true }));

// servir el Frontend (index.html, resumen.html, CSS/, JS/)
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// rutas
app.use(pedidoRutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor listo en http://localhost:${PORT}`);
});
