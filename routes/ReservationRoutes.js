const express = require('express');
const router = express.Router();
const reservationCntroller = require('../controllers/ReservationController');

router.post('/reservation',  reservationCntroller.createReservation);

module.exports = router;