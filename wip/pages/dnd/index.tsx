import React, { createContext, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Box, { ObjectProp } from '../../components/DragNDrop/Box'
import Drop from '../../components/DragNDrop/Drop'

export interface AppContextInterface {
  (id: number) : void
}

export const cardContext = createContext<AppContextInterface | null>(null)


function DND() {
  const [objects, setObjects] = useState<ObjectProp[]>([
    {
      id: 1,
      title: 'Test object',
      status: 'wip',
    },
  ])

  function markAsDone(id: number): void {
    const dragged = objects.filter(item => item.id === id)
    console.log(id)
    // dragged[0].status = 'done'
    // setObjects(objects.filter(object => object.id !== id).concat(dragged[0]))
  }


  return (
    <cardContext.Provider value={markAsDone}>
      <DndProvider backend={HTML5Backend}>
        <Box title={objects[0].title} id={objects[0].id}/>
        <Drop>
          {objects
            .filter(object => object.status === 'done')
            .map(object => (
              <Box key={object.id} title={object.title} id={object.id}/>
            ))}
        </Drop>
      </DndProvider>
    </cardContext.Provider>
  )
}

export default DND
