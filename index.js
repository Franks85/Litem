const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const cors = require('cors')
// the order of require statement is important
require("./models/User");
require("./models/dataEntry");
require("./models/searchService");
require("./services/passport")(passport);

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

app.use(express.static("public"));
app.use(cors())
// express middleware - pars the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//our headers to allow CORS with middleware like so:
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));

const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(
  session({
    keys: ["sakgdf", "jipdwLL"],
    cookie: {
      expires: expiryDate
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app, passport);
require("./routes/dataEntryRoutes")(app);
require("./routes/searchServiceRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // express serve up production assets (like main.js file)
  app.use(express.static("client/build"));

  // express serve up the index.html file if don't recognize the routes

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// errors middleware

const errorMid = require("./middleware/generic_err_handler");
app.use(errorMid);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;
