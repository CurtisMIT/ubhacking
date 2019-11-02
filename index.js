const uri = "mongodb+srv://user:s050097@cluster0-lrnkr.mongodb.net/test?retryWrites=true&w=majority";
// app.js
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(uri)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const product = require('./routes/route')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/product', product)

let port = 3000

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
})