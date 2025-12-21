const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const todosRoute = require('./routes/todosRoute')

const app = express()


// Middlewares
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes
app.use('/api/todos', todosRoute)


const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/todos-db'
// Conect To DB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connect To DB')
    // listen to port
    app.listen(PORT, () => {
      console.log('Server is running on:', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 