const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataEntrySchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    adviceDate: {
        type: Date,
        required: true
    },
    refCode: {
        type: Number,
        unique: true,
        required: true,
        trim: true,
        min: 5,
        max: 5
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    pubDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('dataEntry', dataEntrySchema);