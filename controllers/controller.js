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

<<<<<<< HEAD
exports.note_get = (req, res) => {
  Product.findById(req.body.author, function(product){
    res.send(product.value)
  })
}
=======
exports.test_create = (req, res) => {
    res.json({ file: req.file })
}
>>>>>>> 23d006f4fdd5ab1f2b486bfa0b1ce45bf7a7ecb4
