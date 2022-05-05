const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")
const multer = require('multer');
const path = require('path');
const upload = require('../middlewares/productsMulter');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const productValidations = require('../middlewares/productValidation');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET movie-detail page. */
router.get('/detail/:id', productsController.detail);

/* GET cart page. */
router.get('/:id/asientos', productsController.seats);

/* GET create page. */
router.get('/create', adminMiddleware, productsController.create); 
router.post('/', upload.fields([{name: 'poster'}, {name: 'background'}]), productValidations, productsController.store);

/* GET edit page. */
router.get('/detail/:id/edit', adminMiddleware, productsController.edit);
router.put('/:id', upload.fields([{name: 'poster'}, {name: 'background'}]), productsController.update);

router.delete('/:id', productsController.delete);

module.exports = router;