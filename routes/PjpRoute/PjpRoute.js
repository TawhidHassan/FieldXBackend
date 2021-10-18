const express = require('express');
const pjpController = require('../../controllers/PjpController/PjpController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), pjpController.getallPjp)
    .post(authController.restrictTo('ADMIN', 'ORG'), pjpController.createPjp);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), pjpController.getsinglePjp)
    .patch(authController.restrictTo('ADMIN', 'ORG'), pjpController.updatePjp)
    .delete(authController.restrictTo('ADMIN', 'ORG'), pjpController.deletePjp);
module.exports = router;