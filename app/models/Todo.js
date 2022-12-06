const { model, Schema } = require('mongoose')
const mongoose = require('mongoose')
const todoSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean
},
{ timestamps: true })

const Todo = model('Todo', todoSchema)

const create = async (newTodoData) => {
  const newTodo = new Todo(newTodoData)

  const todo = await newTodo.save()
  return todo
}

const findById = async (id) => {
  const todo = await Todo.findById(id)
  return todo
}

const findByIdAndUpdate = async (id, newTodoData) => {
  return await Todo.findByIdAndUpdate(id, newTodoData, { new: true })
}

module.exports = { create, findById, findByIdAndUpdate }
