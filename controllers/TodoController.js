const Todo = require('../models/Todo');

function getAll(req, res) {
  Todo.find({}).then((err, docs) => {
    res.send(docs);
  });
}

function filterTodos(req, res) {
    let level = req.params.level;
    Todo.find({level: level}).then((err, docs) => {
        res.send(docs);
    });
}

function createTodo(req, res) {
  Todo.create(req.body).then((err, docs) => {
    res.sendStatus(200);
  });
}

function deleteTodo(req, res) {
    let id = req.params.id;
    Todo.deleteOne({_id: id}).then((err, docs) => {
        res.sendStatus(200);
    });
}

module.exports = {
    getAll,
    filterTodos,
    createTodo,
    deleteTodo
}