const express = require('express')
const router = express.Router()
const queries = require('../db/queries');
const bodyParser = require('body-parser');

router.get('/', (req, resp) => {
  queries.getWine().then((wines) => {
    let result = wines
    let keys = Object.keys(req.query)
    keys.forEach((key) => {
      result = result.filter((element) => {
        let sum = ''
        for (var variable in element) {
          sum += `${element[variable]}`
        }
        return (sum).toLowerCase().includes(req.query[key].toLowerCase())
      })
    })
    resp.json(result)
  })
})

router.get('/:id', (req, resp) => {
  queries.getWineById(req.params.id).then((result) => {
      resp.json(result)
  })
})

router.post('/', (req, resp) => {
  queries.postNewWine(req.body).then((result) => {
    resp.json(result)
  })
})


module.exports = router
