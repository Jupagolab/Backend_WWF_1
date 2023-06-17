const express = require('express');
const cors = require('cors');
const routerUsuarios = require('../routes/usuarios.js');

const app = express();

//middleware(intermediario)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/usuario', routerUsuarios);

module.exports = app;