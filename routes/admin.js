const express = require('express');
const adminRoutes = require('../controllers/admin');
const auth = require('./../middleware/auth/auth')
const router = express.Router();

//POST => /admin/addadmin => REGISTER AN ADMIN
router.post('/register', adminRoutes.addAdmin);

//POST => /admin/addproduct => ADD A PRODUCT
router.post('/addproduct', auth.auth, auth.checkadmin, adminRoutes.addProducts);
//PUT => /admin/id => EDIT A PRODUCT
router.put('/editprod/:id', auth.auth, auth.checkadmin ,adminRoutes.editProduct);
//DELETE => /admin/deleteprod/id => DELETE A PRODUCT
router.delete('/deleteprod/:id', auth.auth, auth.checkadmin, adminRoutes.deleteProduct);

//USER ROUTES
//DELETE => /admin/delete/id => REMOVE A USER
router.delete('/delete/:id', auth.auth, auth.checkadmin ,adminRoutes.deleteUser);
//GET => /admin/users => ALL USERS
router.get('/users',  auth.auth, auth.checkadmin, adminRoutes.getUsers);

module.exports = router;