import {v4 as uuidv4} from 'uuid';

export const mockData =[
    {
        id: uuidv4(), 
        title: ' To do',
        tasks: [
            {
                id: uuidv4(), 
                title: 'Learn JS'
            },
            {
                id: uuidv4(), 
                title: 'learn git'
            },{
                id: uuidv4(), 
                title: 'learn Python'
            },
        ]
    }, 
    {
        id: uuidv4(), 
        title: 'In progress', 
        tasks: [
            {
                id: uuidv4(), 
                title: 'learn golang'
            }, 
            {
                id: uuidv4(), 
                title: 'learn something'
            },{
                id: uuidv4(), 
                title: 'learn idk'
            }
        ]
    },
    {
        id: uuidv4(), 
        title: 'Completed', 
        tasks: [
            {
                id: uuidv4(), 
                title: 'Finish html'
            }
        ]
    }
]