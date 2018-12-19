const router = require('../utils/buildRouter');

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = require("../models/user/user");


router.post("/signup", (req, res, next) => {

  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {

            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });

            user.save()
              .then(result => {
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                res.status(500).json({
                  error: err
                });
              });

          }
        });
      }
    });
});
/* 
router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

 */
router.post('/login', (req, res, next) => {

  User.find({
    email: req.body.email
  })
    .exec()
    .then(usersFound => {

      if (usersFound && usersFound.length < 1) {
        return res.status(401).json({
          message: 'auth fail!'
        });
      }


      bcrypt.compare(req.body.password, usersFound[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'auth fail!'
          });
        }

        if (result) {

          const token = jwt.sign(
            {
              email: usersFound[0].emil,
              _id: usersFound[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: '10h'
            });

          return res.status(200).json({
            message: 'Auth success!',
            token: token
          });
        }

        return res.status(401).json({
          message: 'auth fail!'
        });

      });

    })
    .catch(error => {
      res.status(500).json({
        message: 'Erro when log in'
      })

    });


});


module.exports = router;