const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataEntrySchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    adviceDate: Date,
    refCode: {
        type: Number,
        unique: true
    },
    description: String,
    pubDate: Date
});

module.exports = mongoose.model('dataEntry', dataEntrySchema);