const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
// the order of require statement is important
require("./models/User");
require("./services/passport")(passport);

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === "production") {
  mongoose.connect(keys.mongoURI, {
    useMongoClient: true
  });
} else {
  mongoose.connect("mongodb://localhost/lost_test", {
    useMongoClient: true
  });
}

const app = express();

app.use(express.static("public"));

// express middleware - pars the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  next();
});
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  session({
    secret: "sdhkksdhkfsdkh",
    saveUninitialized: true,
    resave: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app, passport);

if (process.env.NODE_ENV === "production") {
  // express serve up production assets (like main.js file)
  app.use(express.static("client/build"));

  // express serve up the index.html file if don't recognize the routes

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;
