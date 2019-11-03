const Product = require('../models/model')
const Post = require('../models/model')
const Note = require('../models/note')
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

exports.note_get_all = (req, res) => {
    Note.find()
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

exports.note_update = (req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        note.text = req.body.text

        note.save()
        .then(() => res.json({
            confirmation: 'success',
            data: note
        }))
        .catch(err => res.json({
            confirmation: 'fail',
            message: err.message
        }))
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
    const id = req.params.id
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

exports.post_update = (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        post.author = req.body.author
        post.title = req.body.title
        post.votes = req.body.votes

        post.save()
        .then(() => res.json({
            confirmation: 'success',
            data: post
        }))
        .catch(err => res.json({
            confirmation: 'fail',
            message: err.message
        }))
    })
}
// exports.upvote = async (req, res) => {
//   res.send(Post.findById(req.body.id))
//   Post.findById(req.body.id).upvote += 1
//   res.send(Post.findById(req.body.id))
//   await Post.save((err) => {
//       if (err) {
//           return next(err)
//       }
//       res.send('Note created successfully')
//   })
// }

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

exports.text_save = (req, res) => {
    res.send('Received text from client')
}
