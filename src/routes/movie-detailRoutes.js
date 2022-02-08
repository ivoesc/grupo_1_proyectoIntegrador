const express = require('express');
const router = express.Router();
const controller = require("../controllers/movie-detailController.js")

/* GET login page. */
router.get('/', controller.moviedetail);

module.exports = router;