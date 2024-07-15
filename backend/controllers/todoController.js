const createTodoDTOSchema = require("../dto/createTodoDTO")
const updateTodoDTOSchema = require("../dto/updateTodoDTO")
const todo = require("../models/todo")
const user = require("../models/user")

class TodoController {
  checkPermission() {

  }

  async getTodos(req, res) {
    try {
      const todos = await todo.find({ creatorId: req.user.id })
      res.json({
        success: true,
        todos
      })
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e.message,
        errors: e.errors
      })
    }
  }

  async createTodo(req, res) {
    try {
      createTodoDTOSchema.parse(req.body)
      const {text} = req.body

      const condidate = await user.findOne({ _id: req.user.id })
      if (!condidate) {
        throw new Error('user is not exist')
      }

      const createdTodo = new todo({
        text,
        creatorId: req.user.id
      })

      await createdTodo.save()
      res.json({
        success: true,
        todo: createdTodo
      })
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e.message,
        errors: e.errors
      })
    }
  }

  async updateTodo(req, res) {
    try {
      const updateId = req.params.id
      updateTodoDTOSchema.parse(req.body)
      const {text, isComplete} = req.body

      const todoCondidate = await todo.findOne({ _id: updateId, creatorId: req.user.id })
      if (!todoCondidate) {
        throw new Error("todo id not found.")
      }

      Object.assign(todoCondidate, {text, isComplete})
      await todoCondidate.save()
      res.json({
        success: true,
        updatedTodo: todoCondidate
      })
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e.message,
        errors: e.errors
      })
    }
  }

  async deleteTodo(req, res) {
    try {
      const updateId = req.params.id

      const todoCondidate = await todo.findOne({ _id: updateId, creatorId: req.user.id })
      if (!todoCondidate) {
        throw new Error("todo id not found.")
      }

      await todo.deleteOne({ _id: updateId })
      res.json({
        success: true
      })
    } catch(e) {
      res.status(400).json({
        success: false,
        message: e.message,
        errors: e.errors
      })
    }
  }
}

module.exports = new TodoController()