import TodoListItem from './TodoListItem'
import todoList from '../../lib/todo'
import React from 'react'

interface Props {
  items?: todoList[]
}


export default function TodoList({ items = [] }: Props) {
  return (
    <div>
      {items.map(({ id, name, complete }) => (
        <TodoListItem key={id} id={id} name={name} complete={complete} />
      ))}
    </div>
  )
}

// todoList is a list of todo objects