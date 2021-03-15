import todoListItem from '../../lib/todo'
import React from 'react'

export default function TodoListItem({ id, name, complete, toggleTodo }: todoListItem) {
  function handleTodoClick () {
    if (!id) return
    toggleTodo(id)
  }
  return (
    <div>
      {name}
      <input type="checkbox" checked={complete} onChange={handleTodoClick}/>
    </div>
  )
}
