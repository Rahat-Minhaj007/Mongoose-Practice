const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const todoModel = require('../models/todoModel');
const Todo = new mongoose.model('Todo', todoModel);


// get all todo 
router.get('/', async (req, res) => {

});

// get single todo 
router.get('/:id', async (req, res) => {

})

// post todo 
router.post('/', async (req, res) => {

    const newTodo = new Todo(req.body);
    await newTodo.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "500 server side error"
            })
        } else {
            res.status(200).json({
                message: "Todo Was Inserted successfully"
            })
        }
    });
})

// post multiple  todo 
router.post('/all', async (req, res) => {

    await Todo.insertMany(req.body, (err) => {
        if (err) {
            res.status(500).json({
                message: "500 server side error"
            })

        } else {
            res.status(200).json({
                message: "Todo's Array Was Inserted successfully"
            })
        }
    })

})

// put  todo 
router.put('/:id', async (req, res) => {

})


// delete todo 
router.delete('/:id', async (req, res) => {

})

module.exports = router;