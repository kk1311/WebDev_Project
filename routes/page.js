const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/edit/:id', pageController.getEditPage);
router.post('/edit/:id', pageController.editPage);

module.exports = router;
