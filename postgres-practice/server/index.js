const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    )
    res.json(newTodo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo')
    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
    res.json(todo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const putTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id])
    res.status(201).json('Todo was updated')
  } catch (error) {
    console.error(error.message)
  }
})

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
    res.status(200).json('Todo was deleted')
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server has started on port 5000')
})

module.exports = app
