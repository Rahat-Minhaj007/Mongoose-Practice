const mongoose = require('mongoose');

exports.config = () => {
    mongoose
        .connect(`mongodb://127.0.0.1:27017/todos`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(console.log("Data Base Connected Successfully"))
        .catch(err => console.log(err))
}