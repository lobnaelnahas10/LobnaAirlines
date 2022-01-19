const flightController= require('../controllers/flight.js');
const express =require('express');
const router= express.Router();



router.get('/viewAllFlights', flightController.getFlights);
router.get('/viewFlight/:flightid', flightController.getFlight);
router.post('/createflight',flightController.createFlight);
router.delete('/flightDelete/:flightId',flightController.deleteFlights);
router.post('/search-listings',flightController.searchListings);
router.put('/updateFlight/:flightId',flightController.updateflight);
router.get('/viewAllReservations', flightController.getReservations);


module.exports=router;


