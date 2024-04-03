const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.login);
router.get('/dashboard', adminController.getDashboardPage);
router.get('/addPage', adminController.getAddPagePage);
router.post('/addPage', adminController.addPage);
router.get('/editPage/:id', adminController.getEditPagePage);
router.post('/editPage/:id', adminController.editPage);

module.exports = router;
