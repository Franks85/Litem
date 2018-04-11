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
      const items = await DataModel.find({ _user: req.user.id }).sort([
        ["adviceDate", 1]
      ]);
      res.send(items);
    } catch (error) {
      if (error) {
        res.json({ error: "No items found, try to add one" });
      }
    }
  });

  app.post("/api/dashboard/detail", async (req, res) => {
    const { refCode } = req.body;

    try {
      const item = await DataModel.find({ refCode });

      if (item.length) {
        res.send({ item });
      } else {
        res.json({
          error: "No item found, please search for a existing RefCode"
        });
      }
    } catch (error) {
      if (error) {
        res.json({ error: "Ops something goes wrong :(" });
      }
    }
  });

  app.post('/api/dashboard/detail/delete', async (req, res) => {
    const { refCode } = req.body;
    console.log(refCode)
    try{
      const item = await DataModel.findOneAndRemove({refCode});
      res.send(item);
    } catch (error) {
      if(error) {
        res.json({ error: "Ops something goes wrong :( try later" });
      }
    }
  })
};
