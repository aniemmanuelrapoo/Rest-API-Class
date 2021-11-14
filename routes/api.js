const express = require('express');
const Rapoo = require('../models/rapoo');
const router = express.Router();

//get a list of rapoos from the db
router.get('/rapoos', (req, res, next) => {
    /*Rapoo.find({}).then((rapoos) => {
        res.send(rapoos)
    })*/

    Rapoo.aggregate([
        {
        $geoNear: {
        near: { type: "Point", coordinates: [ parseFloat(req.query.lng) , parseFloat(req.query.lat) ] },
        maxDistance: 100000,
        distanceField: "distance",
        spherical: true
        }
        }
    ]).then((rapoos) => {
        res.send(rapoos);
    })
});

//add a new rapoo to the data
router.post('/rapoos', (req, res, next) => {
    Rapoo.create(req.body).then((rapoo) => {
        res.send(rapoo)
    }).catch(next)
});

//Update a rapoo in the database
router.put('/rapoos/:id', (req, res, next) => {
    Rapoo.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Rapoo.findOne({_id: req.params.id}).then((rapoo) => {
            res.send(rapoo)
        })
    })
});

//Delete a rapoo from the database
router.delete('/rapoos/:id', (req, res, next) => {
    Rapoo.findByIdAndRemove({_id: req.params.id}).then((rapoo) => {
        res.send(rapoo)
    })
});

module.exports = router;