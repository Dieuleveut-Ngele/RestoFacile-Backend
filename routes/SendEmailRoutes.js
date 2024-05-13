const express = require('express');
const router = express.Router();
const emailController = require('../controllers/SendEmailController');

router.post('/send-email', emailController.sendEmail);



module.exports = router;



