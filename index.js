const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'pug')

app.listen(port, function() {
    console.log(`App are listening on port ${port}`)
})

app.get('/', function(req, res) {
    res.render('index', { query: req.query.q })
})
