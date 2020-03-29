const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/**
 * Métodos HTTP:
 * 
 * GET: busca informação do backend
 * POST: cria informação no backend
 * PUT: alterar informação no backend
 * DELETE: excluir informação no backend
 */


 /**
  * Tipos de parâmetros:
  * 
  * QUERY: parâmetros nomeados enviados na rota após '?'
  * servem para: filtros, paginação
  * 
  * ROUTE PARAMS: parâmetros utilizados para identificar recursos
  * 
  * REQUEST BODY: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver do Banco: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;