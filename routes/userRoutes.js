const express = require('express');
const {  signUpPost, logInPost } = require('../controllers/userControllers');
const router = express.Router();

// signup
router.post('/signup', signUpPost);

// login
router.post('/login', logInPost);


module.exports = router;