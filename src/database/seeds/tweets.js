const data = [{
  description: 'My first tweet',
  likes: 20,
  retweets: 35
}, {
  description: 'Second tweet',
  likes: 20000,
  retweets: 35000
}]

exports.seed = function(knex, Promise) {
  return knex('tweets').del()
    .then(function() {
      return knex('tweets')
        .insert(data)
    });
}
