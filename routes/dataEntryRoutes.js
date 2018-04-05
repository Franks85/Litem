const mongoose = require("mongoose");
const DataModel = mongoose.model("dataEntry");

module.exports = function(app) {
  app.post("/api/dashboard", async (req, res) => {
    const { adviceDate, refCode, description, pubDate } = req.body;

    try {
      const newItem = await new DataModel({
        _user: req.user.id,
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

  app.get("/api/dashboard", async (req, res) => {
    try {
      const items = await DataModel.find({ _user: req.user.id }).limit(8);
      res.send(items);
    } catch (error) {
      if (error) {
        res.json({ error: "No items found" });
      }
    }
  });
};
