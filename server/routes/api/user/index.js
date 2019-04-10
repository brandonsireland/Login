const router = require('express').Router();
const authController = require('../../../controllers/auth.ctrl');

router.post('/signup', authController.user_create_post);

router.post('/login', authController.user_login_post);

module.exports = router;