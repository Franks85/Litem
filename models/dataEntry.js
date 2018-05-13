const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataEntrySchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    itemSelected: {
        type: String,
        required: true
    },
    adviceDate: {
        type: Date,
        default: Date.now()
    },
    refCode: {
        type: Number,
        unique: true,
        required: true,
        trim: true,
        min: 10000,
        max: 99999
    },
    description: {
        type: String,
        lowercase: true
    },
    pubDate: {
        type: Date
    }
});

module.exports = mongoose.model('dataEntry', dataEntrySchema);