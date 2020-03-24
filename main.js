/**
 * This file contains a basic json-server implementation
 * to be used in production environments like `now`
 **/

const fs = require('fs')
const jsonServer = require('json-server')
const data = require('./data.json')
const server = jsonServer.create()

temp = '/tmp/data.json'

fs.writeFileSync(temp, JSON.stringify(data))

const router = jsonServer.router(temp)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`VanHack events-data server is running on ${port}`)
})