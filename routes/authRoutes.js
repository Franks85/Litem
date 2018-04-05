module.exports = function(app, passport) {
  // test route
  app.get("/api", function(req, res) {
    res.send({ hi: "there" });
  });

  // auth route
  
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

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};

