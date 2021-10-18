const express = require('express');
const brandController = require('./../../controllers/BrandController/BrandController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), brandController.getallBrand)
    .post(authController.restrictTo('ADMIN', 'ORG'), brandController.createBrand);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), brandController.getsingleBrand)
    .patch(authController.restrictTo('ADMIN', 'ORG'), brandController.updateBrand)
    .delete(authController.restrictTo('ADMIN', 'ORG'), brandController.deleteBrand);
module.exports = router;