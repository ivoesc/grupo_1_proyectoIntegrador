const express = require('express');
const router = express.Router();
const controller = require("../controllers/indexController.js")

/* GET home page. */
router.get('/', controller.index);


module.exports = router;
