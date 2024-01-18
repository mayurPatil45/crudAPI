const express = require('express');
const route = express.Router();
const { homeController, createController } = require('../controllers/homeController');
const { readController } = require('../controllers/readController');
const { editController , updateController, deleteController} = require('../controllers/editController');

route.get('/', homeController);
route.post('/', createController);
route.get('/read/', readController);
route.get('/edit/:id', editController);
route.post('/update/:id', updateController);
route.get('/delete/:id', deleteController);

module.exports = route;