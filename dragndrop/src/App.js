import Drag from './components/Drag'
import DropTarget from './components/DropTarget'

function App() {
  function onItemDropped () {
    console.log('item has been dropped')
  }
  return (
    <div className='App'>
      <Drag dataItem='item-1'>
        <div>Something to be dragged</div>
      </Drag>
      <DropTarget onItemDropped={onItemDropped}>
        <div>...</div>
      </DropTarget>
    </div>
  )
}

export default App
