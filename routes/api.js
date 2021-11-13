const express = require('express');
const router = express.Router();

//get a list of rapoos from the db
router.get('/rapoos', (req, res) => {
    res.send({type: 'GET'})
});

//add a new rapoo to the data
router.post('/rapoos', (req, res) => {
    res.send({type: 'POST'})
});

//Update a rapoo in the database
router.put('/rapoos/:id', (req, res) => {
    res.send({type: 'PUT'})
});

//Delete a rapoo from the database
router.delete('/rapoos/:id', (req, res) => {
    res.send({type: 'DELETE'})
});

module.exports = router;