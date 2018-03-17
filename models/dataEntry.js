const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataEntrySchema = new Schema({
    adviceDate: Date,
    refCode: Number,
    description: String,
    pubblicationDate: Date
});

module.exports = mongoose.model('dataEntry', dataEntrySchema);