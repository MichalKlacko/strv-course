/* eslint-disable no-console */
'use strict'

const Koa = require('koa')
const bodyParser = require('koa-body-parser')
// const json = require('json')
const routes = require('./routes/index')
const config = require('./config/default')

// App setup
const app = new Koa()

// Initialize routes
app.use(bodyParser())
app.use(routes)

const PORT = config().server.port

const server = app.listen(PORT, () => {
  console.log(`Server online on ${PORT}`)
})