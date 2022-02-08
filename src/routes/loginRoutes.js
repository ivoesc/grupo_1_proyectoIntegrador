const express = require('express');
const router = express.Router();
const controller = require("../controllers/loginController.js")

/* GET login page. */
router.get('/', controller.login);

module.exports = router;