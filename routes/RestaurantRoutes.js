const express = require('express');
const router = express.Router();
const restaurantCntroller = require('../controllers/RestaurantController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Adjust destination folder as needed

router.post('/restaurants', upload.single('image'), restaurantCntroller.createRestaurant);

module.exports = router;
