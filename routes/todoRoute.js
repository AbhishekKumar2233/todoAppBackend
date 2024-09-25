const express = require('express');
const Router = express.Router();
const {addTodo,todoList,updateTodo,deleteTodo} = require('../controller/todoController');

Router.post('/add',addTodo);
Router.get('/get',todoList);
Router.put('/put',updateTodo);
Router.delete('/delete',deleteTodo);


module.exports=Router;
