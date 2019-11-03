const Product = require('../models/model')

exports.test = (req, res) => {
    res.send('Greetings from the test controller')
}

exports.note_create = (req, res) => {
    let note = new Note({
        author: req.body.author,
        date: req.body.date
    })

    note.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Note created successfully')
    })
}

exports.note_get = (req, res) => {
  Product.findById(req.body.author, function(product){
    res.send(product.value)
  })
}
