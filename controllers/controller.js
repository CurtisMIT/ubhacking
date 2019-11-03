const Product = require('../models/model')
const Post = require('../models/model')
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

exports.post_create = (req, res) => {
  let post = new Post({
    author: req.body.author,
    note: req.body.note
  })

  post.save((err) => {
    if (err) {
        return next(err)
    }
    res.send('Note created successfully')
  })
}

exports.post_get = (req, res) => {
  Post.findById(req.body.author, function(product){
    res.send(product.value)
  })
}

exports.upvote = async (req, res) => {
  res.send(Post.findById(req.body.id))
  Post.findById(req.body.id).upvote += 1
  res.send(Post.findById(req.body.id))
  await Post.save((err) => {
      if (err) {
          return next(err)
      }
      res.send('Note created successfully')
  })
}
