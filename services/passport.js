const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    })
  })


  passport.use('register',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true,
    proxy: true
  },
  function(req,email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { 
        console.log(err)
        return done(err) }
      if (user) {
        return done(null, false, {message: 'Email already taken'})
      }else{
        const user = new User()
        user.email = email
        user.password = user.generateHash(password)
        user.save(function(err){
          if(err) throw err
          return done(null,user)
        })
      }
    })
  }))

  passport.use('login',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true,
    proxy: true
  },
  function(req,email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, {message: 'Incorrect email or password, please try again!'})
      }
      if (!user.validPassword(password)) {
        return done(null, false, {message: 'Incorrect email or password, please try again!'})
      }
      return done(null, user)
    })
  }
  ))
}
