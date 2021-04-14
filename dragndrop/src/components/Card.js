import React from 'react'

function Card ({  id, className, draggable, children }) {
  function startDrag (e) {
    const target = e.target
    e.dataTransfer.setData('card_id', target.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  function dragOver (e) {
    e.stopPropagation()
  }

  return (
    <div id={id} className={className} draggable={draggable} onDragStart={startDrag} onDragOver={dragOver}>
      {children}
    </div>
  )
}

export default Card