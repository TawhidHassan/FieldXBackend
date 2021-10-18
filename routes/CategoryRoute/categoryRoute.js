const express = require('express');
const categoryController = require('./../../controllers/CategoryController/CategoryController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), categoryController.getallCategory)
    .post(authController.restrictTo('ADMIN', 'ORG'), categoryController.createCategory);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), categoryController.getsingleCategory)
    .patch(authController.restrictTo('ADMIN', 'ORG'), categoryController.updateCategory)
    .delete(authController.restrictTo('ADMIN', 'ORG'), categoryController.deleteCategory);
module.exports = router;