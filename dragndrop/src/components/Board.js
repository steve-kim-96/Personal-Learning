import React from 'react'

function Board({ id, className, children }) {
  function dragOver(e) {
    e.preventDefault()
  }


  function drop(e) {
    e.preventDefault()
    const cardId = e.dataTransfer.getData('card_id')

    const card = document.getElementById(cardId)
    card.style.display = 'block'

    e.target.appendChild(card)
  }

  return (
    <div id={id} className={className} onDragOver={dragOver} onDrop={drop}>
      {children}
    </div>
  )
}

export default Board
