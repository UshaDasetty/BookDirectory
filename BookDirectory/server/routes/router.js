const express = require('express');
const route = express.Router();


const services = require('../services/render')
const controller = require('../controller/controller')

// get routes
route.get('/', services.homeRouter)
route.get('/add-book', services.add_book)
route.get('/update-book', services.update_book)

// API (Application Programming Interface)
route.post('/api/books', controller.create);
route.get('/api/books', controller.Return);
route.put('/api/books/:id', controller.update);
route.delete('/api/books/:id', controller.delete);

module.exports = route