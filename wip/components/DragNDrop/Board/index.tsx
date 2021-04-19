import React from 'react'
import Knight from '../Knight'
import Square from '../Square'

function Board () {
  return (
    <>
      <Square black>
        <Knight/>
      </Square>
    </>
  )
}

export default Board