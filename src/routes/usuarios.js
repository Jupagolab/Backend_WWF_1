const { Router } = require('express');
const { registrarUsuario, buscarUsuario} = require('../controllers/usuario.js');

//crear router
const routerUsuarios = Router();

// -------------- GET --------------
routerUsuarios.get('/:usuario', buscarUsuario);

// --------------- POST --------------
routerUsuarios.post('/', registrarUsuario);

module.exports = routerUsuarios;