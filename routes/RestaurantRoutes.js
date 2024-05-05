const express = require('express');
const router = express.Router();
const restaurantCntroller = require('../controllers/RestaurantController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); 

router.post('/postrestaurant', upload.single('image'), restaurantCntroller.createRestaurant);
//router.post('/restaurants',  restaurantCntroller.createRestaurants);
router.get('/getrestaurant', restaurantCntroller.getAllRestaurants);
router.get('/getrestaurant/:id', restaurantCntroller.getRestaurantById);
router.delete('/deleterestaurant/:id', restaurantCntroller.deleteRestaurantById);

module.exports = router;
