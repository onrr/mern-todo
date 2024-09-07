const Todo = require('../models/todosModel')
const mongoose = require('mongoose')

// get all Todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({createdAt: -1})

  res.status(200).json(todos)
}

// get a single Todo
const getTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Todo'})
  }

  const todo = await Todo.findById(id)

  if (!todo) {
    return res.status(404).json({error: 'No such Todo'})
  }

  res.status(200).json(todo)
}

// create a new Todo
const createTodo = async (req, res) => {

  const {title, isCompleted} = req.body

  // add to the database
  try {
    const todo = await Todo.create({ title, isCompleted })
    res.status(200).json(todo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Todo
const deleteTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Todo'})
  }

  const todo = await Todo.findOneAndDelete({_id: id})

  if(!todo) {
    return res.status(400).json({error: 'No such Todo'})
  }

  res.status(200).json({todo, "message": "Successful"})
}

// update a Todo
const updateTodo = async (req, res) => {
  const { id, isCompleted } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Todo'})
  }

  const todoId = {_id: id}
  const update = { isCompleted: !isCompleted }
  const todo = await Todo.findOneAndUpdate(todoId, update)

  if (!todo) {
    return res.status(400).json({error: 'No such Todo'})
  }

  res.status(200).json(todo)
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo
}