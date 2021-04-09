const app = require('./index')

//create a todo
app.post('/todos', async(req, res) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.error(error.message)
  }
})
//get all todo

//get a todo

//update a todo

//delete a todo