const mongoose = require("mongoose");
const DataModel = mongoose.model("dataEntry");

module.exports = function(app) {
  app.post("/api/dashboard", async (req, res) => {
    const {
      adviceDate,
      refCode,
      description,
      pubDate,
      itemSelected
    } = req.body;

    const newItem = await new DataModel({
      _user: req.user,
      adviceDate,
      itemSelected,
      refCode,
      description,
      pubDate
    });

    await newItem.save().then(
      () => {
        res.send({ success: "Item saved to database" });
      },
      e => {
        if (e.code === 11000) {
          res.send({ error: "RefCode already taken, please insert a new one" });
        } else {
          res.send(e);
        }
      }
    );
  });

  app.get("/api/dashboard", async (req, res) => {
    try {
      const items = await DataModel.find({ _user: req.user.id }).sort([
        ["adviceDate", 1]
      ]);
      res.send(items);
    } catch (error) {
      if (error) {
        res.send({ error: "No items found, try to add one" });
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
        res.send({
          error: "No item found, please search for a existing RefCode"
        });
      }
    } catch (error) {
      if (error) {
        res.send({ error: "Ops something went wrong :(" });
      }
    }
  });

  app.post("/api/dashboard/detail/delete", async (req, res) => {
    const { refCode } = req.body;
    try {
      const item = await DataModel.findOneAndRemove({ refCode });
      res.send(item);
    } catch (error) {
      if (error) {
        res.send({ error: "Ops something went wrong :( try later" });
      }
    }
  });

  app.post("/api/search", async (req, res) => {
    const { itemSelected } = req.body;
    try {
      const items = await DataModel.find({ itemSelected }).sort([
        ["adviceDate", 1]
      ]);

      if (!items.length) {
        res.send({ error: "Sorry but your search not match any results :(" });
      } else {
        const results = items.map(obj => {
          return {
            name: obj.itemSelected,
            description: obj.description,
            id: obj._id
          };
        });
        res.send(results);
      }
    } catch (error) {
      if (error) {
        res.send({ error: "Ops something went wrong :( try later" });
      }
    }
  });
};
