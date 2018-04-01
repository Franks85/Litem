const mongoose = require("mongoose");
const DataModel = mongoose.model("dataEntry");

module.exports = function(app) {
  app.post("/api/dashboard", async (req, res, next) => {
    const { adviceDate, refCode, description, pubDate } = req.body;

    try {
      const newItem = await new DataModel({
        adviceDate,
        refCode,
        description,
        pubDate
      });

      await newItem.save();
      res.json({ success: "Item saved to database" });
    } catch (error) {
      if (error) {
        res.json({ error: "Please insert a new valid refCode" });
      }
    }
  });
};
