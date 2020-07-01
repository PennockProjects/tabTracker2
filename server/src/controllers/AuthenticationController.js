const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  console.log("signing user", user)
  try {
    let signing = jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: "7d"
    });
    console.log("signed")
    return signing;
  } catch(err) {
    console.log("jwtSignUser", "catch error", err)
  }
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON();
      const signedToken = jwtSignUser(userJson);
      res.send({
        user: userJson,
        token: signedToken
      })
    } catch(err) {
      // console.log("register", err);
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      // console.log('login', 'user password', user)
      if(!user) {
        return res.status(403).send({
          error: 'The Login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password);

      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'The Login information was incorrect'
        })
      }

      const userJson = user.toJSON();
      const signedToken = jwtSignUser(userJson);
      res.send({
        user: userJson,
        token: signedToken
      })
    } catch(err) {
      // console.log("login", err);
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
