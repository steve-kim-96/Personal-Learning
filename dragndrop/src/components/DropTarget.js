import React from 'react'

function DropTarget ({ onItemDropped, dropEffect, children }) {
  function dragOver (e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function dragEnter (e) {
    e.dataTransfer.dropEffect = 'move'
  }

  function drop (e) {
    const droppedItem = e.dataTransfer.getData('drag-item')
    if (droppedItem) {
      onItemDropped(droppedItem)
    }
  }

  return (
    <div onDragOver={dragOver} onDragEnter={dragEnter} onDrop={drop}>
      {children}
    </div>
  )
}

export default DropTarget