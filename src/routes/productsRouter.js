const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")
const multer = require('multer');
const path = require('path');

// multer para subir el poster y el background

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
          if (req.files[file.fieldname] == req.files.image) {
               cb(null, path.resolve('public/images/products'))
          } else {
               cb(null, path.resolve('public/images/backgrounds'))
          }
    },

    filename: function (req, file, cb) {
          if (req.files[file.fieldname] == req.files.image ) {
               cb(null, 'poster' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
          } else {
               cb(null, 'background' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
          }
    },
})

const upload = multer({ storage: storage });

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