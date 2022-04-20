const express = require('express');
const mongoose = require('mongoose');
const { singleTodoPost, allTodoPost, updateSingleTodo, getAllTodo, getSingleTodo, deleteSingleTodo } = require('../controllers/todoControllers');
const router = express.Router();

const authGuard = require('../middleWares/checkLogin');



// get all todo 
router.get('/', authGuard, getAllTodo);

// get single todo 
router.get('/:id', getSingleTodo)

// post todo 
router.post('/', authGuard, singleTodoPost)

// post multiple  todo 
router.post('/all', allTodoPost)

// put  todo 
router.put('/:id', updateSingleTodo)


// delete todo 
router.delete('/:id', deleteSingleTodo)

module.exports = router;