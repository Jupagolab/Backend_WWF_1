const mysql = require('mysql2');

//crear conexion a la base de datos
const conectar = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdwwf'
  }
);

module.exports = conectar;
  
 