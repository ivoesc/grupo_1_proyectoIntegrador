const express = require('express');
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController.js")

router.get('/users/list', usersApiController.list)
router.get('/users/list/:id', usersApiController.user)

module.exports = router;