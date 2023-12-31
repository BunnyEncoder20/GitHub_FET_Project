const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const dotenv = require('dotenv')

// Modular imports
const serverRoutes = require('./routes/serverRoutes');
const ListingRoutes = require('./routes/ListingRoutes');


const app = express()            // initializing the app
app.set('view engine', 'ejs')  //  setting the view engine to ejs
dotenv.config()
const cors = require('cors')

// setting up the universal middlewares 
app.use(body_parser.urlencoded({ extended: false }))     // body-parser for urlencoded 
app.use(body_parser.json())
app.use(cors())                           // allowing cross site access


// Starting the Server & connecting to DB
app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log(`[Server] Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch(err => console.log('[Server] Error occurred while starting the server : \n', err))
})

app.use('/FET', serverRoutes);  // Mount the server Routes at the '/FET' path
app.use('/FET', ListingRoutes)