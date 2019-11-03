const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test)
router.post('/create', product_controller.note_create)
router.get('/get', product_controller.note_get)
module.exports = router;
