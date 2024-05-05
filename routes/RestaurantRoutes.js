const express = require('express');
const router = express.Router();
const restaurantCntroller = require('../controllers/RestaurantController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); 

router.post('/postresto', upload.single('image'), restaurantCntroller.createRestaurant);
//router.post('/restaurants',  restaurantCntroller.createRestaurants);
router.get('/getresto', restaurantCntroller.getAllRestaurants);

module.exports = router;
