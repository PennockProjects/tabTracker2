module.exports = (sequalize, DataTypes) => {
  var User = sequalize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })

  return User
}
