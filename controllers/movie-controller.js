'use strict'
const conn = require('../models/movie-connection')
const MovieModel = require('../models/movie-model')
const MovieController = () => {}

MovieController.getAll = (req, res, next) => {
  MovieModel.getAll((err, rows) => {
    if (err) {
      let locals = {
        title: 'Error al consultar la base de datos',
        description: 'Error de Sintaxis SQL',
        errr: err
      }
      console.log({ locals })
      res.render('error', locals)
    } else {
      let locals = {
        title: 'Lista de Peliculas',
        data: rows
      }
      console.log(rows)
      if (rows.length === 0) {
        res.redirect('/agregar')
      } else {
        res.render('index', locals)
      }
    }
  })
}

MovieController.getOne = (req, res, next) => {
  let movie_id = req.params.movie_id
  MovieModel.getOne(movie_id, (err, rows) => {
    console.log(err, '---', rows)
    if (err) {
      let locals = {
        title: `Error al buscar el registro con el id: ${movie_id}`,
        description: 'Error de sintaxis SQL',
        error: err
      }
      res.render('error', locals)
    } else {
      let locals = {
        title: 'Editar Pelicula',
        data: rows
      }
      res.render('edit-movie', locals)
    }
  })
}

MovieController.insert = (req, res, next) => {
  let { movie_id, title, realease, rating, image } = req.body
  let movie = {
    movie_id,
    title,
    realease,
    rating,
    image
  }

  MovieModel.insert(movie, (err, rows) => {
    if (err) {
      let locals = {
        title: `Error al agregar el registro con id: ${movie_id}`,
        description: 'Error de Sintaxis SQL',
        error: err
      }
      res.render('error', locals)
    } else {
      res.redirect('/')
    }
  })
}

MovieController.update = (req, res, next) => {
  let { movie_id, title, realease, rating, image } = req.body
  let movie = {
    movie_id,
    title,
    realease,
    rating,
    image
  }
  MovieModel.update(movie, (err) => {
    if (err) {
      let locals = {
        title: `Error al editar el registro con id: ${movie_id}`,
        description: 'Error de Sintaxis SQL',
        error: err
      }
      res.render('error', locals)
    } else {
      res.redirect('/')
    }
  })
}

MovieController.delete = (req, res, next) => {
  let movie_id = req.params.movie_id
  MovieModel.delete(movie_id, (err) => {
    if (err) {
      let locals = {
        title: `Error al Eliminar el registro con id: ${movie_id}`,
        description: 'Error de Sintaxis SQL',
        error: err
      }
      res.render('error', locals)
    } else {
      res.redirect('/')
    }
  })
}

MovieController.addForm = (req, res, next) =>
  res.render('add-movie', { title: 'Agregar Peliculas' })

MovieController.error404 = (req, res, next) => {
  let error = new Error(),
    locals = {
      title: 'Error 404',
      description: 'Recurso no Encontrado',
      error: error
    }

  error.status = 404
  res.render('error', locals)
  next()
}

module.exports = MovieController
