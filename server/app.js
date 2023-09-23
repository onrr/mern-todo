const express = require('express')
const mongoose = require('mongoose')

const todosRoute = require('./routes/todosRoute')

const app = express()


// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes
app.use('/api/todos', todosRoute)


const PORT = 5000
// Conect To DB
mongoose.connect('mongodb://127.0.0.1/todos-db')
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