import React from 'react'
import {KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban';
import {kanbanData, kanbanGrid} from '../assets/data/KanbanData';

function Kanban() {
  return (
    <div>
      <h1>Test</h1>
      <KanbanComponent
        id='Kanban'
        dataSource={kanbanData}
        cardSettings={{contentField: 'Summary', headerField: 'Id'}}
        keyField='Status'
        >
            <ColumnsDirective>
            {kanbanGrid.map((item, index) => {
                <ColumnDirective key={index} {...item} />
            })}
            </ColumnsDirective>
        </KanbanComponent>
    </div>
  )
}

export default Kanban