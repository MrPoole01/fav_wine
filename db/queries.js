const knex = require('./knex')

module.exports = {

  getWine: function () {
    return knex('wine').select()
  },
  
  getWineById: function (id) {
    return knex('wine')select().where('id', id)
  }
}
