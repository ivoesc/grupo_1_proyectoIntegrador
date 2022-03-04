const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")
const multer = require('multer');
const path = require('path');
const upload = require('../middlewares/productsMulter')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET movie-detail page. */
router.get('/detail/:id', productsController.detail);

/* GET cart page. */
router.get('/carrito', productsController.cart);

/* GET create page. */
router.get('/create', productsController.create); 
router.post('/', upload.fields([{name: 'image'}, {name: 'background'}]), productsController.store);

/* GET edit page. */
router.get('/detail/:id/edit', productsController.edit);
router.put('/:id', upload.fields([{name: 'image'}, {name: 'background'}]), productsController.update);

router.delete('/:id', productsController.delete);

module.exports = router;