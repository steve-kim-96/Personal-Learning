import todoList from '../../lib/todo'
import React, { useRef, useState } from 'react'

export default function TodoForm() {
  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [todos, setTodos] = useState([])

  function todoSubmit (e: React.MouseEvent<HTMLButtonElement>) {
    const name = inputField.current.value
    if (!name) return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
  }
  return (
    <div>
      <h2>0 Todos left</h2>
      <input ref={inputField} type="text"/>
      <button onClick={todoSubmit}>Add Todo</button>
      <button>Clear Todo</button>
    </div>
  )
}

// Don't know how to set the todos this way