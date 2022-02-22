const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js")

/* GET login page. */
router.get('/login', usersController.login);

/* GET register page. */
router.get('/register', usersController.register);

module.exports = router;