import TodoList from './components/TodoList'
import { v4 } from 'uuid'
import './App.scss'
import React, { useState, useEffect, useRef } from 'react'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

type TodoObject = {
  id: string,
  name: string,
  complete: true | false
}

function App() {
  const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [todos, setTodos] = useState<TodoObject[]>([])
  const uuid = v4()

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedTodos) setTodos(JSON.parse(storedTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function todoSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    const name = inputField.current.value
    if (!name) return
    setTodos(prevTodos => [...prevTodos, { id: uuid, name: name, complete: false }])
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function toggleTodo(id: string) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    if (!todo) return
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className='form'>
        <h2>Todos left: <span className='todo-count'>{todos.length}</span></h2>
        <input ref={inputField} type="text" placeholder='Todo goes here' />
        <div className="btn-box">
          <button className='add-todo' onClick={todoSubmit}>Add Todo</button>
          <button className='clear todos' onClick={handleClearTodos}>Clear Todo</button>
        </div>
      </div>
      <TodoList items={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
