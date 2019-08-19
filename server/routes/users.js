var express = require('express');
var router = express.Router();

var userController = require('./../controllers/userController');
const isLoggedIn = require('./../controllers/authController');
let { isLogged } = isLoggedIn;

// Create new user route
router.post('/register', userController.register)

// user login route
router.post('/login', userController.login)

// verifying user route
router.get('/verify', userController.verifyUser);

// Getting lists of users
router.get('/list', userController.getUsers);

// Getting list of images of a particular user
router.get('/:id', userController.getImagesOfUser);

module.exports = router;
