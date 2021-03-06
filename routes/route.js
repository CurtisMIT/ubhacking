const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const api_controller = require('../controllers/controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', api_controller.test)
// router.post('/test_create', upload.single('file'), product_controller.test_create)

// notes
router.post('/notes', api_controller.note_create)
router.get('/notes/:id', api_controller.note_get)
router.get('/notes', api_controller.note_get_all)
router.post('/notes/:id', api_controller.note_update)

// posts
router.post('/posts', api_controller.post_create)
router.get('/posts/:id', api_controller.post_get)
router.get('/posts', api_controller.post_get_all)
router.post('/posts/:id', api_controller.post_update)

// texteditor
router.post('/save', api_controller.text_save)

module.exports = router;
