const express = require('express');
const router = express.Router();
const restaurantCntroller = require('../controllers/RestaurantController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); 

router.post('/restaurants', upload.single('image'), restaurantCntroller.createRestaurant);
//router.post('/restaurants',  restaurantCntroller.createRestaurants);


module.exports = router;
