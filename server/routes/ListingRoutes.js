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
            query.ititle = { $regex: new RegExp(req.query.search, 'i') };
        }

        // Check if filter object is provided
        if (req.query.filter) {
            const filters = req.query.filter;
            console.log('Filters req : ', req.query.filter)

            // Handle each filter type based on the key in the filters object
            if (filters.itype) {
                query.itype = filters.itype;
            }

            if (filters.ibrand) {
                query.ibrand = filters.ibrand;
            }

            if (filters.icolor) {
                query.icolor = filters.icolor;
            }

            if (filters.iprice) {
                // Handle price filter based on your data structure
                // Example: query.iprice = { $gte: 1000, $lte: 5000 };
                const [low, high] = filters.iprice.split(' ').map(Number);
                query.iprice = { $gte: low, $lte: high };
            }
        }

        // Check and modify the query based on the sort parameter
        if (req.query.sort) {
            if (req.query.sort === 'l2h') {
              sortCriteria = { iprice: 1 }; // low to high
            } else if (req.query.sort === 'h2l') {
              sortCriteria = { iprice: -1 }; // high to low
            } else if (req.query.sort === 'a2z') {
              sortCriteria = { ititle: 1 }; // alphabetically
            } else if (req.query.sort === 'z2a') {
              sortCriteria = { ititle: -1 }; // reverse alphabetically
            }
          }

        // finally querying the db
        console.log('Query : ', query);
        
        const itemsArr = await itemModelref.find(query).sort(sortCriteria);

        itemsArr.forEach(element => {
            console.log(element.ititle)
        });

        res.json({
            itemsArr
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