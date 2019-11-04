module.exports = {
    customMiddleware: (req, res, next) => {
        // console.log('custom Middleware')
        if (!req.session.username) {
            req.session.username = 'Michael Scott'
        }
        // console.log(req.session)
        next()
    },
    authenticate: (req, res, next) => {
        if (req.session.username === 'Michael Scott'){
            next()
        } else {
            res.status(200).send('you shall not pass')
        }
    }
}