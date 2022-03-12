const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const upload = require('../middlewares/usersMulter');
const validations = require('../middlewares/usersValidation');

/* GET login page. */
router.get('/login', usersController.login);

/* GET register page. */
router.get('/register', usersController.register);
router.post('/register', upload.single('profilePic'), validations, usersController.registerProcess);

module.exports = router;