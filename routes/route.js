const express = require('express');
const router = express.Router();
const { upload } = require('../index')

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test)
// router.post('/test_create', upload.single('file'), product_controller.test_create)
router.post('/createNote', product_controller.note_create)
router.post('/createPost', product_controller.post_create)
router.get('/getNote', product_controller.note_get)
router.get('/getPost', product_controller.post_get)
router.get('/upvote', product_controller.upvote)
module.exports = router;
