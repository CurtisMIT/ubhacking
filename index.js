const uri = "mongodb+srv://user:s050097@cluster0-lrnkr.mongodb.net/test?retryWrites=true&w=majority";
// app.js
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const crypto = require('crypto')
const path = require('path')

mongoose.connect(uri)
// mongoose.Promise = global.Promise
let gfs
const conn = mongoose.createConnection(uri)
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('notes')
})

// create storage engine
const storage = new GridFsStorage({
    url: uri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'notes'
          };
          resolve(fileInfo)
        })
      })
    }
})

const upload = multer({ storage });


// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const product = require('./routes/route')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', product)

// POST: uploading a file
app.post('/test_create', upload.single('file'), (req, res) => {
    res.json({ file: req.file })
})

// GET: retrieving files
app.get('/test_get', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length == 0) {
            return res.status(404).json({
                err: 'No files exist'
            })
        }

        return res.json(files)
    })
})

// GET: retrieving a file
app.get('/test_get/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if (!file) {
            return res.status(404).json({
                err: 'No files exist'
            })
        }

        return res.json(file)
    })
})

let port = 3000

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
})

module.exports = {
    upload: upload
}