
const faker = require('faker');

exports.seed = function(knex) {
  createFakeProducts = (i) => {
    return {
      title: faker.commerce.productName(),
      price: faker.finance.amount(),
      description: faker.commerce.product(),
      image_url: faker.image.fashion()
    }
  }

  const products = [];
  const numOfFakes = 50;

  for (let i = 0; i < numOfFakes; i++) {
    products.push(createFakeProducts(i))
  }

  return (
    knex('products')
      .then(function() {
        return knex('products').insert(products)
      })
  )
};

