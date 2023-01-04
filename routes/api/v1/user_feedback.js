const express = require('express');

const router = express.Router();

// require user Feed controller 
const userFeedback=require('../../../controllers/api/v1/feedbackController');

// setting post route for registration of new doctor
router.post('/feedback', userFeedback.register);

// exporting router
module.exports = router;