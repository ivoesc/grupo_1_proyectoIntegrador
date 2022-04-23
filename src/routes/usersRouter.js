const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const authMiddleware = require('../middlewares/authMiddleware.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const upload = require('../middlewares/usersMulter');
const validations = require('../middlewares/usersValidation');

/* GET profile page. */
router.get('/profile', authMiddleware, usersController.profile);
router.put('/update', usersController.update);

/* GET login page. */
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);

/* GET register page. */
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('profile_pic'), validations, usersController.registerProcess);

/* GET logout page. */
router.get('/logout/', usersController.logout);

module.exports = router;