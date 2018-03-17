const mongoose = require("mongoose");

const DataModel = mongoose.model("dataEntry");

module.exports = function(app) {
  app.post("/api/model", async (req, res) => {
    const {
      adviceDate,
      refCode,
      description,
      pubblicationDate
    } = req.body;

    const dataModel = new DataModel({
      
    });

    
  });
};
