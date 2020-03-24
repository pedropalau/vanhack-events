/**
 * This file contains a basic json-server implementation
 * to be used in production environments like `now`
 **/

const jsonServer    = require('json-server')
const server        = jsonServer.create()
const router        = jsonServer.router('data.json')
const middlewares   = jsonServer.defaults()
const port          = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`VanHack events-data server is running on ${port}`)
})