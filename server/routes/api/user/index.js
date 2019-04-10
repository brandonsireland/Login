const router = require('express').Router();
const userController = require('../../../controllers/user.ctrl');

router.post('/signup', userController.user_create_post);

router.post('/login', userController.user_login_post);

module.exports = router;