const knex = require('./knex')
const bodyParser = require('body-parser');

module.exports = {

  getWine: function () {
    return knex('wine').select()
  },

  getWineById: function (id) {
    return knex('wine').select().where('id', id)
  },

  getWineByName: function (name) {
    return knex('wine').select().where('name', name)
  },

  getWineByType: function (type) {
    return knex('wine').select().where('type', type)
  },

  getWineByRating: function (rating) {
    return knex('wine').select().where('rating', rating)
  },

  postNewWine: function () {
    return knex('wine').insert(newWine).returning('*')
  }
}
