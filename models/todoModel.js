const mongoose = require('mongoose');

const todoModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

})

module.exports = todoModel