const express = require('express');
const usersRoutes = require('../controllers/admin');
const router = express.Router();

router.get('/users', usersRoutes.getUsers);
router.get('/user/:firebase_id', usersRoutes.getUserById);
router.put('/user/:id', usersRoutes.editUser);
router.delete('/user/:id', usersRoutes.deleteUser);

module.exports = router 