const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")

/* GET movie-detail page. */
router.get('/movie-detail', productsController.detail);

/* GET cart page. */
router.get('/carrito', productsController.cart);

/* GET create page. */
router.get('/product-create-form', productsController.create); 

/* GET edit page. */
router.get('/product-edit-form', productsController.edit); 

module.exports = router;