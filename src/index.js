require('dotenv').config()
const http = require('http')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

const httpServer = http.createServer(app)
const server = httpServer.listen(process.env.PORT || 8080, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("Server is running on http://%s:%s", host, port)
})