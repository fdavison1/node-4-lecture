require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const {SERVER_PORT, SESSION_SECRET} = process.env
const middleware = require('./middleware')

const app = express()

//middleware (above endpoints)
app.use(express.json())
app.use(session({
    resave: false, 
    saveUninitialized: false, 
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))
app.use(express.static(`${__dirname}/../build`))
// app.use(middleware.customMiddleware)

//endpoints
app.get('/api/points', middleware.authenticate, ctrl.getPoints)
app.post('/auth/login', ctrl.login)
app.delete('auth/logout', ctrl.logout)


//listen
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is working?`))