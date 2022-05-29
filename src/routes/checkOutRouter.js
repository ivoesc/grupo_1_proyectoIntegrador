const express = require('express');
const router = express.Router();
const checkOutController = require("../controllers/checkOutController.js")

router.post('/create_preference', checkOutController.checkOut)
router.get('/feedback', checkOutController.feedback)

module.exports = router;