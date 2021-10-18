const express = require('express');
const productController = require('../../controllers/ProductController/ProductController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );
router
    .route('/')
    .get(authController.restrictTo('ADMIN', 'ORG'), productController.getallProduct)
    .post(authController.restrictTo('ADMIN', 'ORG'), productController.createProduct);

router
    .route('/:id')
    .get(authController.restrictTo('ADMIN', 'ORG'), productController.getsingleProduct)
    .patch(authController.restrictTo('ADMIN', 'ORG'), productController.updateProduct)
    .delete(authController.restrictTo('ADMIN', 'ORG'), productController.deleteProduct);
module.exports = router;