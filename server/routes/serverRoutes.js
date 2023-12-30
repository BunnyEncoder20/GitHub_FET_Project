const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModelref = require('../models/userModel')

// Creating a instance of Router : 
const router = express.Router()
dotenv.config()

// initial get request 
router.get('/', (req, res) => {
    res.json({
        Title: "Server of GitHub FET Project",
        Author: "Varun Verma",
        msg: "Server has started successfully"
    })
})


// Route for Login
router.post('/login', async (req, res) => {
    try {
        // console.log(req.body) 
        const { uemail, upwd } = req.body;
        // checking if data has come or not 
        if (!uemail || !upwd) {
            return res.status(400).json({
                status: 'FAIL',
                msg: 'Incomplete data',
            });
        }

        // Quering the DB to find the specific user
        const user = await userModelref.findOne({ email: uemail })
        console.log(user)



        // If user doesn't exist : 
        if (!user) {
            return res.status(400).json({
                status: 'FAIL',
                msg: '[Mongo] email not found',
            })
        }

        // comparing the password entered and in db : 
        const samePassword = await bcrypt.compare(upwd, user.password)
        // if the password is not same 
        if (!samePassword) {
            return res.status(400).json({
                status: 'FAIL',
                msg: '[Mongo] Incorrect password',
            })
        }




        const JWTToken = jwt.sign(user.toJSON(), process.env.JWT_PASSWORD, { expiresIn: '5m' })

        // else return the user info : 
        res.json({
            Status: "SUCCESS",
            msg: `${user.name} login successful`,
            token: JWTToken         // to look at the JWT token 
        })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'FAIL',
            msg: '[Server] Something went wrong ... ',
            error: err
        })
    }
})


// Route for signup
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const { uname, umobile, uemail, upwd } = req.body;
        // Check if the required properties are present in the request body
        if (!uname || !umobile || !uemail || !upwd) {
            return res.status(400).json({
                status: 'FAIL',
                msg: 'Incomplete data',
            });
        }

        // else making the document 
        let saltRounds = 10 //this is basically the rounds of encryption the password will undergo
        const encryptedPassword = await bcrypt.hash(upwd, saltRounds);   // 
        await userModelref.create({
            name: uname,
            phone: umobile,
            email: uemail,
            password: encryptedPassword
        })
        res.json({
            status: 'SUCCESS',
            user: uname,
            msg: ' user added'
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'FAIL',
            msg: 'Something went wrong while adding user',
            error: err
        })
    }
})




module.exports = router;