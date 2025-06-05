'use strict'

const mysql = require('mysql'),
  conf = require('./db-conf.json'),
  { host, user, port, pass, db } = conf.mysql,
  dbOptions = {
    host,
    user,
    port,
    password: pass,
    database: db
  },
  myConn = mysql.createPool(dbOptions)

myConn.getConnection((err, connection) => {
  if (err) {
    console.log(`Error al conectarse a la base de datos: ${err.stack}`)
    return
  }
  console.log(`Conexion establecida con Exito N°: ${myConn.threadId}`)

  connection.release()
})

module.exports = myConn
