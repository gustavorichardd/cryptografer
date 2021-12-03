const { Router } = require('express')

const ServiceController = require('./controllers/ServiceController')

const routes = Router();

routes.post('/encripts', ServiceController.store);
routes.get('/encripts/:id', ServiceController.index);

module.exports = routes;