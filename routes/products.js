const express = require('express');
const productsRoutes = require('../controllers/products');
const router = express.Router();
const isAuthenticated = require('./../middleware/auth/auth.js');

router.get('/',  productsRoutes.getProducts)
router.get('/:id', productsRoutes.getProductById);
router.post('/addproduct', productsRoutes.addProducts);
router.put('/:id', productsRoutes.editProduct);
router.delete('/:id', productsRoutes.deleteProduct);

module.exports = router