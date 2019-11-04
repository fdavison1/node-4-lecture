require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const {SERVER_PORT, SESSION_SECRET} = process.env

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

//endpoints
app.get('/api/points', ctrl.getPoints)


//listen
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is working?`))