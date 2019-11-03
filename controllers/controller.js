const Note = require('../models/model')
const Post = require('../models/model')

exports.test = (req, res) => {
    res.send('Greetings from the test controller')
}

exports.note_create = (req, res) => {
    let note = new Note({
        author: req.body.author,
        date: req.body.date
    })

    note.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
}

exports.post_create = (req, res) => {
    let post = new Post({
        author: req.body.author,
        date: req.body.date,
    })
}

exports.test_create = (req, res) => {
    res.json({ file: req.file })
}