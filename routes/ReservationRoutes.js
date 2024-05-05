const express = require('express');
const router = express.Router();
const reservationCntroller = require('../controllers/ReservationController');

router.post('/postreservation',  reservationCntroller.createReservation);
router.get('/getreservation',  reservationCntroller.getAllReservations);

module.exports = router;