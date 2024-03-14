var express = require('express');
const { doSignUp, doLogin } = require('../controllers/AuthController');
var router = express.Router();


router.post('/signup',doSignUp)
router.post('/login',doLogin)

module.exports = router;