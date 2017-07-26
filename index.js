const express =require('express')
const bodyParser = require('body-parser')
const queries = require('./db/queries')
const router = require('./routes/resources')
const cors = require('cors')

var port = process.env.PORT || 8080
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use(cors())
app.use('/wine', router)



app.listen(port)
