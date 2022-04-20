const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['admin', 'user']
    },
    todos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Todo"
        }
    ]

})

module.exports = userModel