const express = require('express');

//set up expess app
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listen for request
app.listen(process.env.port || 4000, () => {
    console.log('now listening for reguest');
});