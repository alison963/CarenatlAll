const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)



// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.post("/", (req, res, next) => {
    let date = new Date()
    req.body.createdAt = date.toISOString()
    if (req.body.price) {
        req.body.price = Number(req.body.price)
    }
    if (req.body.mileage) {
        req.body.mileage = Number(req.body.mileage)
    }

    let hasErrors = false

    let error = {} //object for errors

    if (req.body.make.length < 2) {
        hasErrors = true
        error.name = "name less than 2"
    }
    if (req.body.price < 200) {
        hasErrors = true
        error.name = "price less than 200"
    }
    if (req.body.mileage < 100) {
        hasErrors = true
        error.name = "mileage less than 100"
    }
    if (hasErrors) {
        res.status(400).jsonp(error)
        return
    }

    // Continue to JSON Server router
    next()
})

// Use default router
server.use(router)
server.listen(4000, () => {
    console.log('JSON Server is running')
})