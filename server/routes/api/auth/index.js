const router = require('express').Router();

const authController = require('../../../controllers/auth.ctrl');

// Get Routes
router.get('/facebook/callback', authController.get_facebook_callback);


module.exports = router;