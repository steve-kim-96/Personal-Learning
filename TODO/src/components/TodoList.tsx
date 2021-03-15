import TodoListItem from './TodoListItem'
import todoList from '../../lib/todo'
import React from 'react'

interface Props {
  items?: todoList[],
  toggleTodo?: any
}


export default function TodoList({ items = [], toggleTodo }: Props) {
  return (
    <div>
      {items.map(({ id, name, complete }) => (
        <TodoListItem key={id} id={id} name={name} complete={complete} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

// todoList is a list of todo objects