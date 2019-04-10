const express = require('express');
const router = express.Router();
const passport = require('passport');

// const index = require('../controllers/index.ctrl')

router.use('/api/v1/', require('./api'));

// Deals with all other routes.
router.get('/', function(req, res){
    res.send('<h1>Hello World</h1>')
});

module.exports = router;