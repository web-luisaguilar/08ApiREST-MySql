'use strict';

const mysql = require('mysql'),
  conf = require('./db-conf.json'),
  { host, user, port, pass, db } = conf.mysql,
  dbOptions = {
    host,
    user,
    port,
    password: pass,
    database: db,
  },
  myConn = mysql.createConnection(dbOptions);

myConn.connect((err) => {
  return err
    ? console.log(`Error al conectarse a la base de datos: ${err.stack}`)
    : console.log(`Conexion establecida con Exito N°: ${myConn.threadId}`);
});

module.exports = myConn;
