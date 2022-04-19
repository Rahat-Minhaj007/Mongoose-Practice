const express = require('express');
const dotenv = require('dotenv')
const { config } = require('./config/config');
const todoHandler = require('./routes/todoRoutes');
const userHandler = require('./routes/userRoutes');


// express app initialization
const app = express();
dotenv.config()
app.use(express.json());


const PORT = 5000;

// database connection with mongoose
config();

// 
app.use('/todo', todoHandler);
app.use('/user', userHandler);


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