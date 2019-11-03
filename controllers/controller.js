const Product = require('../models/model')
const Post = require('../models/model')
const Note = require('../models/model')
exports.test = (req, res) => {
    res.send('Greetings from the test controller')
}

exports.note_create = (req, res) => {
    const note = new Note(req.body)

    note.save()
    .then(note => {
        res.json({
            confirmation: 'success',
            data: note
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}

exports.note_get = (req, res) => {
    Note.findById(req.params.id)
    .then(post => {
        res.json({
            confirmation: 'success',
            data: post
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}

exports.post_create = (req, res) => {
    const post = new Post(req.body)
    post.save()
    .then(post => {
        res.json({
            confirmation: 'success',
            data: post
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}

exports.post_get = (req, res) => {
    const id = req.body.id
    Post.findById(id)
    .then(post => {
        res.json({
            confirmation: 'success',
            data: post
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: 'Post: ' + id + ' not found'
        })
    })
}

exports.post_get_all = (req, res) => {
    Post.find()
    .then(posts => {
        res.json({
            confirmation: 'success',
            data: posts
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}

// newsfeed notesfeed? search by category

exports.post_get_by_category = (req, res) => {
    let category = req.params.category
    Post.find({category: category})
    .then(posts => {
        res.json({
            confirmation: 'success',
            data: posts
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
}