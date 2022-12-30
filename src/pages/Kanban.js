import React from 'react'
import KanbanUI from '../component/KanbanUI'
import KanbanHistory from '../component/KanbanHistory'

function Kanban() {
  return (
    <div style={{padding: '50px'}}>
      <h1 style={{marginBottom: '20px'}}>
        Kanban UI
      </h1>
      <KanbanUI />
      <div>
        <h3>Kanban History Tasks</h3>
      <KanbanHistory />
      </div>
    </div>
  )
}

export default Kanban