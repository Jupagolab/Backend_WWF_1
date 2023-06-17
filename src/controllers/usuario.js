const conectar = require('../config/database.js');
const mysql = require('mysql2');

//CRUD
const buscarUsuario = (req, res) => {
    const usuario = req.params.usuario; 

    const consultaBuscar = `SELECT * FROM Usuarios WHERE usuario = ?;`;

    const consultar = mysql.format(consultaBuscar, [usuario]);

    conectar.query(consultar, (err, resultado) => {
        if (err){
            throw err;
        }
        if (resultado[0] !== undefined){
            res.json(resultado[0]);
        } else {
            res.json({ mensaje: `El usuario ${usuario} no fue encontrado en la base de datos`});
        }
    });
};

const registrarUsuario = (req, res) => {
    const { usuario, nombre, correo, clave } = req.body;

    const consultaRegistrar = `INSERT INTO Usuarios VALUES(?, ?, ?, ?);`

    const registrar = mysql.format(consultaRegistrar, [usuario, nombre, correo, clave]);

    conectar.query(registrar, (err, resultado) => {
        if (err){
            throw err;
        }
        res.json({mensaje: 'Usuario creado'});
    });
};

/*
const modificarUsuario = (req, res) => {
    const usuario = req.params.usuario;
    const { nombre, correo, clave } = req.body;

    const consultaModificar = `UPDATE Usuarios SET nombre=?, correo=?, clave=? WHERE usuario=?;`;

    const modificar = mysql.format(consultaModificar, [nombre, correo, clave, usuario]);

    conectar.query(modificar, (err, resultado) => {
        if (err){
            throw err;
        }
        res.json({mensaje: `Usuario ${usuario} modificado exitosamente.`});
    });
};

const eliminarUsuario = (req, res) => {
    const usuario = req.params.usuario; 

    const consultaEliminar = `DELETE FROM Usuarios WHERE usuario = ?;`;

    const eliminar = mysql.format(consultaEliminar, [usuario]);

    conectar.query(eliminar, (err, resultado) => {
        if (err){
            throw err;
        }
        res.json({mensaje: `El usuario ${usuario} ha sido eliminado exitosamente.`});
    });
};
module.exports = { registrarUsuario, buscarUsuario, modificarUsuario, eliminarUsuario };
*/
module.exports = { registrarUsuario, buscarUsuario};