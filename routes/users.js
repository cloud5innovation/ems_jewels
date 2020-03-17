const express = require('express');
const usersRoutes = require('../controllers/users');
const router = express.Router();
const isAuthenticated = require('./../middleware/auth/auth.js');

router.get('/users',  usersRoutes.getUsers);
router.get('/user/:firebase_id', isAuthenticated, usersRoutes.getUserById);
router.post('/users/register', usersRoutes.addUser);
// router.post('/register', usersRoutes.addUser);
router.put('/user/:id', usersRoutes.editUser);
router.delete('/user/:id', usersRoutes.deleteUser);

module.exports = router 