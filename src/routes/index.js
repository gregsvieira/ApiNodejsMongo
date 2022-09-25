import express from 'express';
import cors from 'cors';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res)=>{
    res.status(200).send({titulo: 'first endpoint'})
  })

  app.use(
    cors(),
    express.json(),
    livros,
    autores
  )
}

export default routes;

