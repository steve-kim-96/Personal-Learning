import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import { cardContext } from '../../../pages/dnd'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export interface ItemProp {
  id: number;
  title: string;
  status: string;
}

function Drop ({children}: Props) {
  const markAsDone = useContext(cardContext) 
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item: ItemProp, __) => markAsDone ? markAsDone(item.id) : null,
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