const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://localhost/lost_test", {
    useMongoClient : true
});
  mongoose.connection.once("open", () => done()).on("error", err => {
    console.warn("warning", err);
  });
});


