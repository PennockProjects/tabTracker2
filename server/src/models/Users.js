const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const SALT_FACTOR = 8;

// async function hashWord(word) {

//   return new Promise (resolve => {
//     bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(word, salt, null))
//     .then(hash => {
//       console.log("hashWord", "word", word, "hash", hash)
//       resolve(hash)
//     })
//   })
// }

function hashPassword(user) {

  console.log("hashPassword")
  if(!user.changed('password')) {
    return;
  }

  // var hash = await hashWord(user.password)
  // user.setDataValue('password', hash)
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      // let beforePassword = user.password;
      user.setDataValue('password', hash)
      // console.log("hashPassword", 'before', beforePassword, "hash", hash, "after", user.password)
    })
}

module.exports = (sequalize, DataTypes) => {
  var User = sequalize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      // beforeSave: hashPassword

      // beforeCreate: function beforeCreate(user) {
      //   console.log("beforeCreate", "password", user.password)
      //   hashPassword(user)
      // },
      // beforeUpdate: function beforeUpdate(user) {
      //   console.log("beforeUpdate", "password", user.password)
      //   hashPassword(user)
      // },
      // beforeSave: function beforeSave(user) {
      //   console.log("beforeSave", "password", user.password)
      //   hashPassword(user)
      // },
    }
  })

  User.prototype.comparePassword = function(plainTextPassword) {
    // const candidateHash = await hashWord(plainTextPassword)

    // console.log('comparePassword', 'candidate', plainTextPassword, 'password', this.password)
    return bcrypt.compareAsync(plainTextPassword, this.password)
  }

  return User
}
