const express = require("express");
const router = new express.Router();
const userModel = require("./../models/User");
const passport = require("passport");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt")


router.post("/signup", (req, res, next) => {
    // console.log("file ?", req.file);
    // console.log(req.body);
    var errorMsg = "";
    console.log("body", req.body)
    const { email, password } = req.body;
    // @todo : best if email validation here or check with a regex in the User model

    let salt
    let hashPass

    if(bcryptjs.genSaltSync(10)) {
      console.log( "bcryptjs", bcryptjs.genSaltSync(10))
      salt = bcryptjs.genSaltSync(10);
      // more on encryption : https://en.wikipedia.org/wiki/Salt_(cryptography)
      hashPass = bcryptjs.hashSync(password, salt);
    } else {
      console.log("bcrypt", bcrypt.genSaltSync(10))
      salt = bcrypt.genSaltSync(10);
      // more on encryption : https://en.wikipedia.org/wiki/Salt_(cryptography)
      hashPass = bcrypt.hashSync(password, salt);
    }
    
  
    const newUser = {
      email,
      password: hashPass,
    };
    
  
    userModel
      .create(newUser)
      .then(newUserFromDB => {
        res.status(200).json({msg: "signup ok"});
      })
      .catch(err => {
        console.log("signup error", err);
        next(err);
      });
  });

  
router.post("/signin", (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
      if (err || !user) return res.status(403).json("invalid user infos"); // 403 : Forbidden
  
      /**
       * req.Login is a passport method
       * check the doc here : http://www.passportjs.org/docs/login/
       */
      req.logIn(user, function(err) {
        /* doc says: When the login operation completes, user will be assigned to req.user. */
        if (err) {
          return res.json({ message: "Something went wrong logging in" });
        }
  
        // We are now logged in
        // You may find usefull to send some other infos
        // dont send sensitive informations back to the client
        // let's choose the exposed user below
        const { _id, email, } = user;
        // and only expose non-sensitive inofrmations to the client's state
          res.status(200).json({
            currentUser: {
              _id,
              email
            }
          })
      });
    })(req, res, next); // IIFE (module) pattern here (see passport documentation)
  });
  
  router.post("/signout", (req, res, next) => {
    req.logout(); // utility function provided by passport
    res.json({ message: "Success" });
  });
  
  router.use("/is-loggedin", (req, res, next) => {
    if (req.isAuthenticated()) {
      // method provided by passport
      const { _id, email } = req.user;
      return res.status(200).json({
        currentUser: {
          _id,
          email
        }
      });
    }
    res.status(403).json("Unauthorized");
  });
  


  module.exports = router;
  