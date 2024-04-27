const express = require('express');
const router = express.Router();
const useController = require('../controllers/UseController');

router.post('/login', useController.login);



module.exports = router;
