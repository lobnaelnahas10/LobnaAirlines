const reservationController= require('../controllers/reservation.js');
const flightController= require('../controllers/flight.js');
const express =require('express');
const router= express.Router();

router.post('/createReservation',reservationController.createReservation);
router.get('/viewReservation/:reservationId', reservationController.getReservation);
router.delete('/reservationCancel/:reservationId',reservationController.cancelReservations);
router.post('/payment', reservationController.payReservation);
router.put('/updateReservation/:reservationId',reservationController.updateReservation);
router.get('/sendReservation/:reservationId', reservationController.sendReservation);
module.exports=router;

