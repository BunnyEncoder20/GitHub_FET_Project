const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const itemModelref = require('../models/itemModel')

// Creating a instance of Router : 
const router = express.Router()
dotenv.config()


router.get('/listing', async (req, res) => {
    try {
        const items = await itemModelref.find()
        res.json({
            items
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

module.exports = router;