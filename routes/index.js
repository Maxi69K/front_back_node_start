const express = require('express');
const TodoController = require('../controllers/TodoController');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/final');
const router = new express.Router();

router.get('/todos', TodoController.getAll);
router.get('/todos/:level', TodoController.filterTodos);
router.delete('/todos/:id', TodoController.deleteTodo);
router.post('/todo', TodoController.createTodo);

module.exports = router;