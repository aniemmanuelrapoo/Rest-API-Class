const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
    }

    //add in geo location
})

const Rapoo = mongoose.model('rapoo', RapooSchema);
module.exports = Rapoo