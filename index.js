const knex = require('./db/knex')
const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
var app = express()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use(cors())

app.get('/', (req, resp) => {
  knex('wine')
    .select('*')
    .then((results) => {
      resp.json(results)
    })
})

app.listen(port)
