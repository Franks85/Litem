const mongoose = require("mongoose");
const searchData = mongoose.model("searchService");

module.exports = function(app) {
    app.post("/api/service", async (req, res) => { 
        const searchReq = req.body
        const newSearch = await new searchData(searchReq);
        try {
            await newSearch.save();
            res.send({success: 'Request sent successfully'})
        } catch (error) {
            if(error) {
                res.send({error: 'Oops something went wrong :( try again'})
            }
        }
    });
}