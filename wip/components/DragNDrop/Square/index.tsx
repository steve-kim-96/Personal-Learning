import React from 'react'

function Square({ black, children }) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return (
    <div
    style={{
      backgroundColor: fill,
      color: stroke,
      width: '500x',
      height: '650px'
    }}
    >
      {children}
    </div>
  )
}

export default Square
