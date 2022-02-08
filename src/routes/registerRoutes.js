const express = require('express');
const router = express.Router();
const controller = require("../controllers/registerController.js")

/* GET login page. */
router.get('/', controller.register);

module.exports = router;