const express = require('express');
const router = express.Router();
const controller = require("../controllers/carritoController.js")

/* GET home page. */
router.get('/', controller.carrito);

module.exports = router;