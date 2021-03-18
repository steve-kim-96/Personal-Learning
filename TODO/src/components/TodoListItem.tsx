import todoListItem from '../../lib/todo'
import './TodoListItem.scss'
import React from 'react'

export default function TodoListItem({ id, name, complete, toggleTodo }: todoListItem) {
  function handleTodoClick () {
    if (!id) return
    toggleTodo(id)
  }
  return (
    <div className='todo-item'>
      {name}
      <input className='checkbox' type="checkbox" checked={complete} onChange={handleTodoClick}/>
    </div>
  )
}
