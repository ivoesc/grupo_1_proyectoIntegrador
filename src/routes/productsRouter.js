const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")
const multer = require('multer');
const path = require('path');

// multer para subir el poster

const posterStorage = multer.diskStorage({
    posterDestination: function (req, file, cb) {
         cb(null, path.resolve('public/images/products'))
    },
    filename: function (req, file, cb) {
         cb(null, 'poster' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
    }})

const posterUpload = multer({ storage: posterStorage });

// multer para subir la imagen del background

const backgroundStorage = multer.diskStorage({
     backgroundDestination: function (req, backgroundFile, cb) {
          cb(null, path.resolve('public/images/detail-backgrounds'))
     },
     backgroundFilename: function (req, backgroundFile, cb) {
          cb(null, 'background' + '-' + req.body.name.split(' ').join('') + path.extname(backgroundFile.originalname))
     }})
 
 const backgroundUpload = multer({ storage: backgroundStorage });

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET movie-detail page. */
router.get('/detail/:id', productsController.detail);

/* GET cart page. */
router.get('/carrito', productsController.cart);

/* GET create page. */
router.get('/product-create-form', productsController.create); 
router.post('/', posterUpload.single('image'), backgroundUpload.single('background'), productsController.store);

/* GET edit page. */
router.get('/product-edit-form/:id', productsController.edit);
router.put('/:id', productsController.update);

router.delete('/', productsController.delete)

module.exports = router;