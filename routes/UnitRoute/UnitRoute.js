const express = require('express');
const unitController = require('../../controllers/UnitController/UnitController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), unitController.getallUnit)
    .post(authController.restrictTo('ADMIN', 'ORG'), unitController.createUnit);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), unitController.getsingleUnit)
    .patch(authController.restrictTo('ADMIN', 'ORG'), unitController.updateUnit)
    .delete(authController.restrictTo('ADMIN', 'ORG'), unitController.deleteUnit);

module.exports = router; 