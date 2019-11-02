const uri = "mongodb+srv://user:s050097@cluster0-lrnkr.mongodb.net/test?retryWrites=true&w=majority";
// app.js
const express = require('express')
const bodyParser = require('body-parser')

const product = require('./routes/route')
const app = express()

let port = 3000
app.use('/product', product)

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
})