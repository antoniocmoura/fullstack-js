const express = require('express')
const routes = express.Router();
const PropertiesController = require('./controllers/PropertiesController')

routes.get('/properties', PropertiesController.read)
routes.post('/properties', PropertiesController.create)
routes.delete('/properties/:id', PropertiesController.delete)
routes.put('/properties/:id', PropertiesController.update)

module.exports = routes