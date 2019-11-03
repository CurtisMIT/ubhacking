const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NoteSchema = new Schema({
    author: {type: String, required: true, max: 100},
    date: {type: String, default: Date.now().toString()},
    category: {type: String},
    title: {type: String, required: true, max: 100},
    text: {type: String, required: true}
})

module.exports = mongoose.model('Note', NoteSchema)