import TodoList from './components/TodoList';
import { v4 } from 'uuid'
import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

type TodoObject = {
  id: string,
  name: string,
  complete: true | false
}

function App() {
  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
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
  return (
    <div className="App">
      <TodoList items={todos} />
      <div className='form'>
        <h2>0 Todos left</h2>
        <input ref={inputField} type="text" />
        <button onClick={todoSubmit}>Add Todo</button>
        <button>Clear Todo</button>
      </div>
    </div>
  );
}

export default App;
