const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routes/todoRoutes');


// express app initialization
const app = express();
app.use(express.json());


const PORT = 5000;

// database connection with mongoose

mongoose
    .connect(`mongodb://localhost:27017/todos`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Data Base Connected Successfully"))
    .catch(err => console.log(err))


// 
app.use('/todo', todoHandler);

// default error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    res.status(500).json({ error: err.message })
});


// starter
app.get('/', (req, res) => {
    res.send("Welcome to Mongoose")
})

// port 
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})