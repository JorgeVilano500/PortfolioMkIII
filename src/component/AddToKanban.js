import React, {useState} from 'react'
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

function AddToKanban() {
    const [task, setTask] = useState('');
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const addToKanban = async (e) => {
        if(label === '' || task === '') {
            return window.alert('Please Choose Progress or Task')
        }
        
        let response = await fetch('https://test-javswebsite.herokuapp.com/addToKanban', {
            method: 'post', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task: task, 
                label: label, 
                description: description 
            })
        })

        let res = await response.json();

        if(res.msg === 'task inserted') {
            navigate('/Kanban')
        }
        
        
        // e.preventDefault()
    }

  return (
    <div>
        <h2>Add to Kanban</h2>
        <InputField
            type='text'
            placeholder='Item'
            value={task ? task : ''}
            onChange={e => setTask(e.target.value)}
        />
        <textarea className='inputField' autoCorrect='on' style={{height: '100px', width: '400px'}} onChange={e => setDescription(e.target.value)} value={description ? description: ' '}> 
           Describe Today
        </textarea><br />
        <label for='task-select'>Choose Status of Task</label> <br/>
        <select onClick={(e)=> setLabel(e.target.value)} id='task-select' name='tasks'>
            <option value=''>--Please Choose how far you've finished</option>
            <option value='To do'>To do</option>
            <option value='In progress' >In progress</option>
            <option value='Testing' >Testing</option>
            <option value='Completed' >Completed</option>

        </select>
        

        <SubmitButton
            text='Add Task'
            disabled={false}
            onClick={addToKanban}
        
        />

    </div>
  )
}

export default AddToKanban