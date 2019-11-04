module.exports = {
    getPoints: (req, res) => {
        console.log('hit')
        if (!req.session.points){
            req.session.points = 0
        }
        res.status(200).send(String(req.session.points))
    }
}