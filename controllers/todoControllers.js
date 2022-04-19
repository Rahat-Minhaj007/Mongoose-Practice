const mongoose = require('mongoose');
const todoModel = require('../models/todoModel');
const Todo = new mongoose.model('Todo', todoModel);

// Post Single Todo
exports.singleTodoPost = async (req, res) => {

    try {
        const newTodo = new Todo(req.body);
        const data = await newTodo.save();
        if (data) {
            res.status(200).json({
                message: "Todo Was Inserted successfully"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "500 server side error"
        })
    }


}

// Post Multiple Todo
exports.allTodoPost = async (req, res) => {
    try {
        const data = await Todo.insertMany(req.body);
        if (data) {
            res.status(200).json({
                message: "Todos Was Inserted successfully"
            })

        }
    } catch (err) {
        res.status(500).json({
            message: "500 server side error"
        })
    }

}

// get all todo 
exports.getAllTodo = (req, res) => {
    console.log(req.userName)
    console.log(req.userId)
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

// get single todo 
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

// update single todo 
exports.updateSingleTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    status: req.body.status
                },
            },
            {
                useFindAndModify: false,
                new: true
            })

        if (data) {
            res.status(200).json({
                message: "Todo Was updated successfully",
                result: data
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "500 server side error"
        })

    }
}

// delete single todo
exports.deleteSingleTodo = async (req, res) => {
    try {
        const data = await Todo.deleteOne({ _id: req.params.id });
        if (data) {
            res.status(200).json({

                message: "Todo Was Deleted successfully"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "500 server side error"
        })
    }

}

