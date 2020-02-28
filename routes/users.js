const express = require('express');
const usersRoutes = require('../controllers/users');
const router = express.Router();

router.get('/users', usersRoutes.getUsers);
router.get('/user/:firebase_id', usersRoutes.getUserById);
router.post('/register', usersRoutes.addUser); 
router.put('/user/:id', usersRoutes.editUser);
router.delete('/user/:id', usersRoutes.deleteUser);

module.exports = router 