const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationServicePolicy')
module.exports = (server) => {
  server.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
}