const MongoInMemory = require('mongo-in-memory')
const User = require('../models/User')
const mongoose = require('mongoose')
const keys = require('../config/keys')

const port = 27017
const mongoServerInstance = new MongoInMemory(port)

mongoServerInstance.start((error) => {
  if (error) {
    console.error(error)
  } else {
    var mongouri = mongoServerInstance.getMongouri('lost_test')
    console.log('mongo in memory started:', mongouri)

    return createTestUser()
  }
})

async function createTestUser() {
  mongoose.Promise = global.Promise

  await mongoose.connect(keys.mongoURI, {
    useMongoClient: true
  })

  const user = new User()
  user.email = 'test@litem.com'
  user.password = user.generateHash('testuser')
  await user.save(function (err) {
    if (err) throw err
    console.log('test user created successfully')
  })
}
