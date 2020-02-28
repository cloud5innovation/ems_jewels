exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments().primary()
        users.string('email').notNullable()
        users.string('firebase_id').notNullable().unique()
        users.string('first_name').notNullable()
        users.string('last_name').notNullable()  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };