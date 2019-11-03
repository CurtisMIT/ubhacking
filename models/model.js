const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NoteSchema = new Schema({
    author: {type: String, required: true, max: 100},
    date: {type: String, default: Date.now().toString()},
    category: {type: String}
})

let PostSchema = new Schema({
    author: {type: String, required: true, max: 100},
    date: {type: String, default: Date.now().toString()},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0},
    note: {type: NoteSchema, required: true}
})

module.exports = mongoose.model('Note', NoteSchema)
module.exports = mongoose.model('Post', PostSchema)
