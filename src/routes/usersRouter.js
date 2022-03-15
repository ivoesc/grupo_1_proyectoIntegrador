const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const upload = require('../middlewares/usersMulter');
const validations = require('../middlewares/usersValidation');

/* GET profile page. */
router.get('/profile', usersController.profile);

/* GET login page. */
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);

/* GET register page. */
router.get('/register', usersController.register);
router.post('/register', upload.single('profilePic'), validations, usersController.registerProcess);

module.exports = router;