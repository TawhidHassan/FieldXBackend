const express=require('express')
const officeController=require('../../controllers/OfficeControlller/officeController')
const authController=require('../../controllers/authController')
const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router
     .route('/')
     .get(authController.restrictTo('ADMIN','ORG'),officeController.getallOffice)
     .post(authController.restrictTo('ADMIN','ORG'),officeController.saveOffice);
router
     .route('/:id')
     .get(authController.restrictTo('ADMIN', 'ORG'), officeController.getsingleOffice)
     .patch(authController.restrictTo('ADMIN', 'ORG'), officeController.updateOffice)
     .delete(authController.restrictTo('ADMIN', 'ORG'), officeController.deleteOffice);
 module.exports = router;     