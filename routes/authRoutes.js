module.exports = function(app, passport) {
  // test route
  app.get("/api", function(req, res) {
    res.send({ hi: "there" });
  });

  // auth route
  app.get("/api/login", function(req, res) {
    res.send({ message: req.flash("loginMessage") });
  });
  app.post(
    "/api/login",
    passport.authenticate("login", {
      successRedirect: "/dashboard",
      failureRedirect: "/api/login",
      failureFlash: true
    })
  );
  app.get("/api/register", function(req, res) {
    res.send("Email already taken" );
  });
  app.post(
    "/api/register",
    passport.authenticate("register", {
      successRedirect: '/api/profile',
      failureRedirect: "/api/register",
      failureFlash: true
    })
  );

  // testing auth flow

  app.get('/api/profile', (req, res) => {
    res.json(req.user);

  })

  app.get("/dashboard", (req, res) => {
    res.send({})
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // enable routing width react

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "public", "index.html"));
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}
