const knex = require('./db/knex')
const express =require('express')
const bodyParser = require('body-parser')
const queries = require('./db/queries');
const cors = require('cors');
var router = express.Router()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use(cors())

router.get('/', (req, resp) => {
  queries.getWine().then((results) => {
      resp.json(results)
    })
})

app.listen(port)
