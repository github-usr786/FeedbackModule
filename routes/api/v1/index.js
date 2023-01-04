// require express
const express = require('express');

// require router from express
const router = express.Router();

// set route path for /doctors
router.use('/feeds', require('./user_feedback'));

module.exports = router;
