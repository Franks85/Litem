const mongoose = require('mongoose')
const {Schema} = mongoose

const searchServiceSchema = new Schema({
  lossDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  lossPlace: {
    type: String,
    required: true,
    lowercase: true
  } ,
  itemSelected: {
    type: String,
    required: true
  } ,
  material: {
    type: String,
    default: ''
  },
  brand: {
    type: String,
    default: ''
  },
  itemColor: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  } ,
  surname: {
    type: String,
    required: true
  } ,
  email: {
    type: String,
    required: true,        
    lowercase: true,
    trim: true
  } ,
  phone: {
    type: Number,
    required: true,
    trim: true
  } ,
  postal: {
    type: Number,
    required: true,
    trim: true
  } ,
  address: {
    type: String,
    required: true
  } ,
  city: {
    type: String,
    required: true
  }  
})

module.exports = mongoose.model('searchService', searchServiceSchema)
