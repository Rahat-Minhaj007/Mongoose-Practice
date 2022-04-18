const express = require('express');
const mongoose = require('mongoose');
const { singleTodoPost, allTodoPost, updateSingleTodo, getAllTodo, getSingleTodo, deleteSingleTodo } = require('../controllers/todoControllers');
const router = express.Router();

const todoModel = require('../models/todoModel');
const Todo = new mongoose.model('Todo', todoModel);


// get all todo 
router.get('/', getAllTodo);

// get single todo 
router.get('/:id', getSingleTodo)

// post todo 
router.post('/', singleTodoPost)

// post multiple  todo 
router.post('/all', allTodoPost)

// put  todo 
router.put('/:id', updateSingleTodo)


// delete todo 
router.delete('/:id', deleteSingleTodo)

module.exports = router;