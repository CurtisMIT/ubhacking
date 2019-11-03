const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NoteSchema = new Schema({
    author: {type: String, required: true, max: 100},
    date: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('Product', NoteSchema)
