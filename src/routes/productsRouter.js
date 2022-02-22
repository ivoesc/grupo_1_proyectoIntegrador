const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")

/* GET movie-detail page. */
router.get('/movie-detail', productsController.detail);

/* GET cart page. */
router.get('/carrito', productsController.cart);

/* GET edit page. */
// router.get('/movie-edit', usersController.edit); 

module.exports = router;