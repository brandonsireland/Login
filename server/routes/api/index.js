const express = require('express');
const router = express.Router();

// example
router.use('/example', require('./example'));
router.use('/user', require('./user'));

module.exports = router;