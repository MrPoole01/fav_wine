const knex = require('../db/knex');
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
  console.log(req.body);
  queries.postNewWine(req.body).then((result) => {
    resp.json(result)
  })
})

router.put('/:id', (req, resp) => {
  console.log(req.body, req.params.id);
    queries.putNewField(req.body, req.params.id).then((result) => {
    resp.json({message: "Updated!"})
  })
})

router.delete('/:name', (req, resp) => {
  queries.deleteIntry(req.params.name).then((result) => {
    resp.json({message: "Deleted!"})
  })
})

module.exports = router
