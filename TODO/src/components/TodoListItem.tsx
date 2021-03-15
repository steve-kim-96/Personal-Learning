import todoListItem from '../../lib/todo'
import React from 'react'

export default function TodoListItem({ name, complete, toggleTodo }: todoListItem) {

  return (
    <div>
      {name}
      <input type="checkbox" checked={complete} onChange={toggleTodo}/>
    </div>
  )
}
