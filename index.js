//expressjs configuration
const express = require('express')
const app = express()
const port = 8080

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

// get req.body data
let testPostMethod

//pug
app.set('view engine', 'pug')

app.listen(port, function() {
    console.log(`App are listening on port ${port}`)
})

app.get('/', function(req, res) {
    res.render('index', { query: testPostMethod })
})

app.get('/create', function(req, res) {
    res.render('create')
})

app.post('/', function(req, res) {
    testPostMethod = req.body.testPostMethod
    res.redirect('/')
})