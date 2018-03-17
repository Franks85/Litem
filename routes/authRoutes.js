module.exports = function(app, passport) {
  // test route
  app.get("/api", function(req, res) {
    res.send({ hi: "there" });
  });

  // auth route
  app.get("/api/login", function(req, res) {
    res.send({});
  });
  
  app.post('/api/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        // *** Display message without using flash option
        return res.send({message: info.message})
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/api/profile');
      });
    })(req, res, next);
  });


  app.get("/api/register", function(req, res, info) {
    res.send({});
  });
  app.post('/api/register', function(req, res, next) {
    passport.authenticate('register', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        // re-render the login form with a message
        return res.send({message: info.message})
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/api/profile');
      });
    })(req, res, next);
  });

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
