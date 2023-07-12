const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/final');

const todoScheme = new mongoose.Schema({
    msg: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: function () {
            return new Date();
        }
    },
    level: {
        type: String,
        default: 'normal'
    }
});

let Todo = mongoose.model('Todo', todoScheme);

module.exports = Todo;