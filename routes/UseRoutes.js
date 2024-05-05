const express = require('express');
const router = express.Router();
const useController = require('../controllers/UseController');

router.post('/login', useController.login);
router.post('/signup', useController.signup);
router.post('/logout', useController.logout);
router.get('/', useController.getAllUsers);


module.exports = router;
