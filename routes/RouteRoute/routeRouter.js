const express = require('express');
const routeController = require('./../../controllers/RouteController/routeController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect);
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), routeController.getallroute)
    .post(authController.restrictTo('ADMIN', 'ORG'), routeController.createroute);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), routeController.getsingleroute)
    .patch(authController.restrictTo('ADMIN', 'ORG'), routeController.updateroute)
    .delete(authController.restrictTo('ADMIN', 'ORG'), routeController.deleteroute);
module.exports = router;