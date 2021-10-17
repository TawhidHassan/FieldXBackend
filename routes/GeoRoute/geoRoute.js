const express = require('express');
const geoController = require('./../../controllers/GeoController/geoController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect);
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), geoController.getallgeo)
    .post(authController.restrictTo('ADMIN', 'ORG'), geoController.creategeo);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), geoController.getsinglegeo)
    .patch(authController.restrictTo('ADMIN', 'ORG'), geoController.updategeo)
    .delete(authController.restrictTo('ADMIN', 'ORG'), geoController.deletegeo);
module.exports = router;