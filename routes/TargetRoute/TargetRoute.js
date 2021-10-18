const express = require('express');
const TargetController = require('../../controllers/TargetController/TargetController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), TargetController.getallTarget)
    .post(authController.restrictTo('ADMIN', 'ORG'), TargetController.createTarget);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), TargetController.getsingleTarget)
    .patch(authController.restrictTo('ADMIN', 'ORG'), TargetController.updateTarget)
    .delete(authController.restrictTo('ADMIN', 'ORG'), TargetController.deleteTarget);
module.exports = router;