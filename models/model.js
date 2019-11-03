const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NoteSchema = new Schema({
<<<<<<< HEAD
=======
    author: {type: String, required: true, max: 100},
    date: {type: String, default: Date.now().toString()},
})

let PostSchema = new Schema({
>>>>>>> 23d006f4fdd5ab1f2b486bfa0b1ce45bf7a7ecb4
    author: {type: String, required: true, max: 100},
    date: {type: String, default: Date.now().toString()},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0},
    note: {type: NoteSchema, required: true}
})

<<<<<<< HEAD
module.exports = mongoose.model('Product', NoteSchema)
=======
module.exports = mongoose.model('Note', NoteSchema)
module.exports = mongoose.model('Post', PostSchema)
>>>>>>> 23d006f4fdd5ab1f2b486bfa0b1ce45bf7a7ecb4
