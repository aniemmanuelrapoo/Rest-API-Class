const express = require('express');
const Rapoo = require('../models/rapoo');
const router = express.Router();

//get a list of rapoos from the db
router.get('/rapoos', (req, res, next) => {
    res.send({type: 'GET'})
});

//add a new rapoo to the data
router.post('/rapoos', (req, res, next) => {
    Rapoo.create(req.body).then((rapoo) => {
        res.send(rapoo)
    }).catch(next)
});

//Update a rapoo in the database
router.put('/rapoos/:id', (req, res, next) => {
    res.send({type: 'PUT'})
});

//Delete a rapoo from the database
router.delete('/rapoos/:id', (req, res, next) => {
    res.send({type: 'DELETE'})
});

module.exports = router;