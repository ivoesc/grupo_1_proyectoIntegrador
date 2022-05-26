const express = require('express');
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController.js")

router.get('/movies/list', productsApiController.list)
router.get('/movies/list/:id', productsApiController.product)
router.post('/movies/list', productsApiController.store)

module.exports = router;