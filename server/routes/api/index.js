const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));

router.use('/auth', require('./auth/index'))

module.exports = router;