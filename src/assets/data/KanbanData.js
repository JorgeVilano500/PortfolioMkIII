export const kanbanGrid =[
    {
    headerText: 'To Do', 
    keyField: 'Open', 
    allowToggle: true
}, 
{
    headerText: 'In Progress', 
    keyField: 'InProgress', 
    allowToggle: true
}, 
{
    headerText: 'Testing', 
    keyField: 'Testing', 
    allowToggle: false,
    isExpanded: false
},
{
    headerText: 'Done', 
    keyField: 'Close', 
    allowToggle: true
}
]

export const kanbanData = [
    {
        Id: 'Task 1', 
        Title: 'Task - 29001',
        Status: 'Open', 
        Summary: 'Analyze the new requirements gathered from the customer', 
        Type: 'Story', 
        Priority: 'Low', 
        Tags: 'Analyze,Customer', 
        Estimate: 3.5, 
        Assignee: 'Nancy Davloio', 
        RankId: 1, 
        Color: '#02897B', 
        className: 'e-story, e-low, e-nancy-davloio'
    }
]