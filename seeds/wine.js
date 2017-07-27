exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "wine"; ALTER SEQUENCE wine_id_seq RESTART WITH 7;')
    .then(() => {

      var list = [{
        id: 1,
        name: 'Humble Pie',
        type: 'Cabernet',
        year: 1994,
        rating: 5
      }, {
        id: 2,
        name: 'Petite Petit',
        type: 'Cabernet',
        year: 2013,
        rating: 4
      }, {
        id: 3,
        name: 'Stoller Reserve',
        type: 'Chardonnay',
        year: 2014,
        rating: 3
      }, {
        id: 4,
        name: 'Tangley Oaks',
        type: 'Cabernet',
        year: 2013,
        rating: 5
      }, {
        id: 5,
        name: 'No 3',
        type: 'Pinot Noir',
        year: 2011,
        rating: 3
      }, {
        id: 6,
        name: 'Minuty',
        type: 'Rosé',
        year: 2016,
        rating: 4
      }]
      return knex('wine').insert(list)
    });
};
