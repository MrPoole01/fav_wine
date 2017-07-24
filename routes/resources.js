const express = require('express')
const router = express.Router()
const queries = require('../db/queries');

router.get('/', (req, resp) => {
  queries.getWine().then((results) => {
      resp.json(results)
    })
})

router.get('/wine/:id', (req, resp) => {
  queries.getWineById(req.params.id).then((results) => {
      resp.json(results)
  })
})

module.exports = router
