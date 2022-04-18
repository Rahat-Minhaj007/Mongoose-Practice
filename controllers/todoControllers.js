const mongoose = require('mongoose');
const todoModel = require('../models/todoModel');

const Todo = new mongoose.model('Todo', todoModel);

exports.singleTodoPost = async (req, res) => {

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
}

exports.allTodoPost = async (req, res) => {

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

}

exports.getAllTodo = (req, res) => {
    Todo.find({ status: 'active' }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "500 server side error"
            })

        } else {
            res.status(200).json({
                result: data,
                message: "Success"
            })
        }

    })

}

exports.getSingleTodo = async (req, res) => {
    try {
        const data = await Todo.find({ _id: req.params.id })
        res.status(200).json({
            result: data,
            message: "Success"
        })
    } catch (err) {
        res.status(200).json({
            result: data,
            message: "Success"
        })
    }
}

// exports.updateSingleTodo = async (req, res) => {
//     await Todo.updateOne({ _id: req.params.id }, {
//         $set: {
//             status: "active"
//         },
//     }, (err) => {
//         if (err) {
//             res.status(500).json({
//                 message: "500 server side error"
//             })

//         } else {
//             res.status(200).json({
//                 message: "Todo Was updated successfully"
//             })
//         }
//     })
// }


exports.updateSingleTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                status: req.body.status
            },
        },
        {
            useFindAndModify: false,
            new: true
        },
        (err) => {
            if (err) {
                res.status(500).json({
                    message: "500 server side error"
                })

            } else {
                res.status(200).json({
                    message: "Todo Was updated successfully"
                })
            }
        })
}


exports.deleteSingleTodo = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "500 server side error"
            })

        } else {
            res.status(200).json({

                message: "Todo Was Deleted successfully"
            })
        }

    })

}

