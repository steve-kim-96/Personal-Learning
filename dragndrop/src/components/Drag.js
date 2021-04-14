import React from 'react'

function Drag ({ dataItem, children, dropEffect }) {
  function startDrag (e) {
    e.dataTransfer.setData('drag-item', dataItem)
    e.dataTransfer.effectsAllowed = 'move'
  }

  return (
    <div draggable onDragStart={startDrag}>
      {children}
    </div>
  )
}

export default Drag