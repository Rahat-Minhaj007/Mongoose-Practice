const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = new mongoose.model('User', userModel);

// Signup post
exports.signUpPost = async (req, res) => {
    const signupUser = await User.find({ userName: req.body.userName });

    if (signupUser.length === 0) {
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({ ...req.body, password: hashPassword });

            await newUser.save();
            res.status(200).json({
                message: "Signup was successfully done !"
            })

        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    } else {
        res.status(500).json({
            message: "This user name already exists."
        })
    }



}

// login post
exports.logInPost = async (req, res) => {

    try {
        const loginUser = await User.find({ userName: req.body.userName });

        if (loginUser && loginUser.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, loginUser[0].password);

            if (isValidPassword) {
                // generate token
                const token = jwt.sign({
                    userName: loginUser[0].userName,
                    userId: loginUser[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: "1h"
                })

                res.status(200).json({
                    "access_token": token,
                    "message": "Login Successful",
                    "user_info": {
                        userName: loginUser[0].userName,
                        role: loginUser[0].role,
                        email: loginUser[0].email
                    }
                })


            } else {
                res.status(401).json({
                    message: "Authentication Failed."
                })
            }
        } else {
            res.status(401).json({
                message: "Authentication Failed."
            })
        }

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }


}
