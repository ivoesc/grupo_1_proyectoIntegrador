const express = require('express');
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController.js")

router.get('/movies/list', productsApiController.list)

module.exports = router;