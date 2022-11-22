import React from 'react'
import './card.scss'

function KanbanCard(props) {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default KanbanCard