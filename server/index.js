const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const body_parser = require('body-parser')

const app = express()            // initializing the app
app.set('view engine' , 'ejs')  //  setting the view engine to ejs
dotenv.config()

// setting up the middlewares 
app.use(body_parser.urlencoded({extended:false}))     // body-parser for urlencoded 
app.use(express.static('./public'))                                 // making public folder available to all files 


// Starting the Server 
app.listen(process.env.PORT , () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then( () => console.log(`[Server] Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch( err => console.log('[Server] Error occurred while starting the server : \n',err))
})


// initial get request 
app.get('/' , (req,res) => {
    res.json({
        Title : "Server of GitHub FET Project" ,
        Author : "Varun Verma" ,
        msg : "Server has started successfully"
    })
})

