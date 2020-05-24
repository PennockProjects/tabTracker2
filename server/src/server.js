const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const server = express()

server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())

require('./routes')(server)

sequelize.sync()
  .then(() => {
    server.listen(config.port)
    console.log("server started on", config.port)
  })

