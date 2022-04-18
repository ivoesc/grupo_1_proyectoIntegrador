const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
          if (req.files[file.fieldname] == req.files.poster) {
               cb(null, path.resolve('public/images/products'))
          } else {
               cb(null, path.resolve('public/images/backgrounds'))
          }
    },

    filename: function (req, file, cb) {
          if (req.files[file.fieldname] == req.files.poster ) {
               cb(null, 'poster' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
          } else {
               cb(null, 'background' + '-' + req.body.name.split(' ').join('') + path.extname(file.originalname))
          }
    },
})

const upload = multer({ storage: storage });

module.exports = upload