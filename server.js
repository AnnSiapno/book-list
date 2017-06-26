'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

let app = express
let router = express.Router()

let port = process.env.API_PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  // To prevent errors from Cross Origin Resource Sharing, set headers to allow
  // CORS with middleware
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credntials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Accesss-Control-Request-Method, Access-Control-Request-Headers')

  // Reomve cacheing so we get the most recent books added
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

router.get('/', function(req, res) {
  res.json({ message: 'API Initialised!' })
})

app.use('/api', router)

app.listen(port, function() {
  console.log(`api running on port ${port}`)
})
