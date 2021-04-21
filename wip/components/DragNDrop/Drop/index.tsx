import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'

interface Props {
  children: JSX.Element[] | JSX.Element
}

function Drop ({children}: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => alert('Drop Success'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  return (
  <div ref={drop} style={{  top: 0, left: 0, height: '200px', width: '200px', backgroundColor: isOver ? 'yellow' : 'black' }}>
    {children}
  </div>
  )
}

export default Drop