const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataEntrySchema = new Schema({
    adviceDate: Date,
    refCode: {
        type: Number,
        unique: true
    },
    description: String,
    pubDate: Date
});

module.exports = mongoose.model('dataEntry', dataEntrySchema);