const express = require('express');
const router = express.Router();

// example
router.use('/example', require('./example'));


module.exports = router;