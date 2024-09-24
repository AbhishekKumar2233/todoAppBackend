const express = require('express');
const Router = express.Router();
const {addTodo} = require('../controller/todoController');

Router.post('/add',addTodo);

module.exports=Router;
