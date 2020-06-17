exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', product => {
      product.increments();
      product.string('title');
      product.string('description', 450);
      product.float('price');
      product.string('image_url', 250);
      product.string('category');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
  };
