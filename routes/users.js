const express = require('express');
const usersRoutes = require('../controllers/users');
const router = express.Router();
const isAuthenticated = require('./../middleware/auth/auth.js');

router.get('/users',  usersRoutes.getUsers);
router.get('/user/:firebase_id', usersRoutes.getUserById);
router.get('/user/:id/cart', usersRoutes.getCart);
router.post('/users/register', usersRoutes.addUser);
router.post('/user/add-to-cart/:id', usersRoutes.addToCart);
// router.post('/register', usersRoutes.addUser);
router.put('/user/:id', usersRoutes.editUser);
router.delete('/user/:id', usersRoutes.deleteUser);

module.exports = router 