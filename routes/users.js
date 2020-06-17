const express = require('express');
const usersRoutes = require('../controllers/users');
const router = express.Router();
const isAuthenticated = require('./../middleware/auth/auth.js');


// //GET => /user/firebase_id => USER PROFILE
// router.get('/user/:firebase_id',  isAuthenticated.auth, usersRoutes.getUserById);
// //GET => /user/id/cart => USER'S CART
// router.get('/user/:id/cart', isAuthenticated.auth, usersRoutes.getCart);
// //POST => /register => SIGN UP 
// router.post('/register', usersRoutes.addUser);
// //POST => /user/add-to-cart/id => ADD ITEM TO CART
// router.post('/user/add-to-cart/:id',  isAuthenticated.auth, usersRoutes.addToCart);
// //PUT => /user/id => EDIT USER ACCOUNT 
// router.put('/user/:id',  isAuthenticated.auth, usersRoutes.editUser);
// //DELETE => /user/id => REMOVE ACCOUNT
// router.delete('/user/:id',  isAuthenticated.auth, usersRoutes.deleteUser);
// //DELETE => /user/removefromcart/:id?prod=1 => REMOVE PRODUCT FROM CART
// router.delete('/user/removefromcart/:id', isAuthenticated.auth, usersRoutes.removeFromCart);

// router.post('user/checkout', usersRoutes.checkout)

//GET => /user/firebase_id => USER PROFILE
router.get('/user/:firebase_id',   usersRoutes.getUserById);
//GET => /user/id/cart => USER'S CART
router.get('/user/:id/cart',  usersRoutes.getCart);
//POST => /register => SIGN UP 
router.post('/register', usersRoutes.addUser);
//POST => /user/add-to-cart/id => ADD ITEM TO CART
router.post('/user/add-to-cart/:id',   usersRoutes.addToCart);
//PUT => /user/id => EDIT USER ACCOUNT 
router.put('/user/:id',   usersRoutes.editUser);
//DELETE => /user/id => REMOVE ACCOUNT
router.delete('/user/:id',   usersRoutes.deleteUser);
//DELETE => /user/removefromcart/:id?prod=1 => REMOVE PRODUCT FROM CART
router.delete('/user/removefromcart/:id',  usersRoutes.removeFromCart);

router.post('user/checkout', usersRoutes.checkout);

router.put('/user/update/:id', usersRoutes.editCart);


module.exports = router; 