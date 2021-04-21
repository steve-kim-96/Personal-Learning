import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'
import React, { useState } from 'react'

export interface ObjectProp {
  id?: number
  title: string
  status?: string
}

function Box({ title }: ObjectProp) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <h1>{title}</h1>
    </div>
  )
}

export default Box
