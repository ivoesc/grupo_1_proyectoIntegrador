const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         cb(null, path.resolve('public/images/products'))
    },
    filename: function (req, file, cb) {
         cb(null, 'poster' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
    }})

const upload = multer({ storage: storage });

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET movie-detail page. */
router.get('/detail/:id', productsController.detail);

/* GET cart page. */
router.get('/carrito', productsController.cart);

/* GET create page. */
router.get('/product-create-form', productsController.create); 
router.post('/', upload.single('image'), productsController.store);

/* GET edit page. */
router.get('/product-edit-form/:id', productsController.edit); 
router.put('/:id', productsController.update);

module.exports = router;