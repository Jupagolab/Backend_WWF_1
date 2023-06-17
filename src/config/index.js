const conectar = require('./database.js');
const app = require('./app.js');

const PUERTO = 3000;

const servidor = () =>{
  // --------------- Conectar Base de Datos -----------------
  conectar.connect((err) => {
    if (err){
      throw err;
    }
    console.log('Conexion exitosa a la base de datos')
  });

  app.listen(PUERTO, () =>{
    console.log(`Servidor iniciado en el puerto ${PUERTO}`)
  });
}

servidor();