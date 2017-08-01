const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getWine: function () {
    return knex('wine').select()
  },

  getWineById: function (id) {
    return knex('wine').select().where('id', id).first()
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

  postNewWine: function (result) {
    return knex('wine').insert(result).returning('*')
  },

  putNewField: function (wine, id) {
    let info = {
      id: wine.id,
      name: wine.name,
      type: wine.type,
      year: wine.year,
      rating: wine.rating
    }
    return knex('wine').where('id', id).update(info).returning('*')
  },

  deleteIntry: function (name) {
    return knex('wine').where('name', name).del()
  }
}
