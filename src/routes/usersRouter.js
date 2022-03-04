const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const upload = require('../middlewares/usersMulter');
const { body } = require('express-validator');

/* GET login page. */
router.get('/login', usersController.login);

/* GET register page. */
router.get('/register', usersController.register);
router.post('/register', upload.single('profilePic'), /*validations,*/ usersController.processRegister);

module.exports = router;