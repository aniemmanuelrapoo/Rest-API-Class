const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//set up expess app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/rapoogo')
mongoose.Promise = global.Promise

//middleware for static html fules
app.use(express.static('public'))

//middlewares
app.use(bodyParser.json())

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next) => {
    // console.log(err)
    res.status(422).send({error: err._message})
})

//listen for request
app.listen(process.env.port || 4000, () => {
    console.log('now listening for reguest');
});