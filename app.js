const express =require('express')
const bodyParser = require('body-parser')
const queries = require('./db/queries')
const router = require('./router/resources')
const cors = require('cors')

var router = express.Router()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use(cors())
app.use('/router', router)



app.listen(port)
