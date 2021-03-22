import todoListItem from '../../lib/todo'
import '../styles/TodoListItem.scss'
import React from 'react'

export default function TodoListItem({ id, name, complete, toggleTodo }: todoListItem) {
  function handleTodoClick () {
    if (!id) return
    toggleTodo(id)
  }
  return (
    <div className='todo-item'>
      <span className='todo-name'>{name}</span>
      <input className='checkbox' type="checkbox" checked={complete} onChange={handleTodoClick}/>
    </div>
  )
}
