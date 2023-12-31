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
        let query = {}
        
        // check if param search is there and not an empty string. Add it to the query  
        if (req.query.search && req.query.search.trim() !== '') {
            console.log(req.query);
            // Case-insensitive search for item titles
            query = { ititle: { $regex: new RegExp(req.query.search, 'i') } };
        }

        // finally querying the db
        const items = await itemModelref.find(query)
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