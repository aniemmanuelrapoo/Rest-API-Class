const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create Geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

//create rapoo Schema and model
const RapooSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name filed is required']
    },
    rank:{
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
})

const Rapoo = mongoose.model('rapoo', RapooSchema);
module.exports = Rapoo