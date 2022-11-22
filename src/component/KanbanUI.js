import React, {useState, useEffect} from 'react'
import './scss/Kanban.scss';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {mockData} from '../assets/data/KanbanData';
import { Card } from 'react-bootstrap';

function KanbanUI() {
    const [data, setData] = useState([])

    const updateKanban = async (dat) => {
        let response = fetch('https://test-javswebsite.herokuapp.com/updateKanban', {
            method: 'put', 
            header: {
                
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }, 
            body : JSON.stringify({
                dat
            })
        })
    }

    const onDragEnd = result => {
        if(!result.destination) return; 
        const { source, destination} = result; 

        if(source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex] 
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)
            
            data[sourceColIndex].tasks = sourceTask;
            data[destinationColIndex].tasks = destinationTask

            setData(data)
            updateKanban(data);

        }

    }

    useEffect(() => {
        async function fetchKanbanData(){
            let res = await fetch('https://test-javswebsite.herokuapp.com/kanbanData', 
            {
                method: 'post', 
                header: {
                  'Accept': 'application/json', 
                  'Content-Type': 'application/json'
                }
            })
            let response = await res.json()

                setData(response)
            // console.log(response)

        }
        fetchKanbanData()
    }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className='kanban'>
            {
                data.map(section =>(
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div 
                                {...provided.droppableProps}
                                className='kanban_section'
                                ref={provided.innerRef}
                            >
                                <div className='kanban_section_title'>
                                    {section.title}
                                </div>
                                <div className='kanban_section_content'>
                                    {
                                        section.tasks.map((task, index) => (
                                          <Draggable
                                            key={task.id}
                                            draggableId={task.id}
                                            index={index}
                                          > 
                                          {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    ...provided.draggableProps.style, 
                                                    opacity: snapshot.isDragging ? '0.5': '1'
                                                }}
                                            >
                                             <Card>
                                                {task.title}
                                            </Card>
                                            </div>
                                          )}
                                          </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))
            }
        </div>
    </DragDropContext>
  )
}

export default KanbanUI