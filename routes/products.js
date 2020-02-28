const express = require('express');
const productsRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', productsRoutes.getProducts);
router.get('/product/:id', productsRoutes.getProductById);

module.exports = router