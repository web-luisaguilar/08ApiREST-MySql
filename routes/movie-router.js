'use strict';

const MovieController = require('../controllers/movie-controller');
const express = require('express'),
  router = express.Router();

router
  .get('/', MovieController.getAll)
  .get('/agregar', MovieController.addForm)
  .post('/', MovieController.insert)
  .get('/editar/:movie_id', MovieController.getOne)
  // .post('/actualizar/:movie_id', MovieController.update)
  // .post('/eliminar/:movie_id', MovieController.delete)
  .put('/actualizar/:movie_id', MovieController.update)
  .delete('/eliminar/:movie_id', MovieController.delete)

  .use(MovieController.error404);

module.exports = router;
