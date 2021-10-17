const express = require('express');
const teritoryController = require('./../../controllers/GeoController/teritoryController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect);
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), teritoryController.getallterritory)
    .post(authController.restrictTo('ADMIN', 'ORG'), teritoryController.createterritory);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), teritoryController.getsingleterritory)
    .patch(authController.restrictTo('ADMIN', 'ORG'), teritoryController.updateterritory)
    .delete(authController.restrictTo('ADMIN', 'ORG'), teritoryController.deleteterritory);
module.exports = router;