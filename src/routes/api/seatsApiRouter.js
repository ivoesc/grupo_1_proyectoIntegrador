const express = require('express');
const router = express.Router();
const seatsApiController = require("../../controllers/api/seatsApiController.js")

router.get('/seats/list', seatsApiController.list)
router.post('/seats', seatsApiController.store)

module.exports = router;