const MongoInMemory = require('mongo-in-memory')

const port = 27017
const mongoServerInstance = new MongoInMemory(port)

mongoServerInstance.start((error, config) => {
  if (error) {
    console.error(error)
  } else {
    var mongouri = mongoServerInstance.getMongouri('lost_test')
    console.log('mongo in memory started:', mongouri)
  }
})
