import React from 'react'
import SubmitButton from './SubmitButton'

function AddGoalsButtons() {

    async function addGoal(type) {
        if(type === 'Weekly') {
            let response = await fetch('https://test-javswebsite.herokuapp.com/addWeeklyGoal', {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json'
                }
            }) 
            let res = await response.json()

        } else if(type === 'Daily') {
            let response = await fetch('https://test-javswebsite.herokuapp.com/addDailyGoal',  {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json'
                }
            })
            let res = await response.json()
        }
    }



  return (
    <div className='m-5'>
        <h1>Goal Manual Adder</h1>
        <SubmitButton
            disabled={false}
            onClick={() => addGoal('Daily')}
            text={'Add Daily Goal'}
        />
        <div className='m-2'></div>
        <SubmitButton
            disabled={false}
            onClick={() => addGoal('Weekly')}
            text={'Add Weekly Goal'}
        />

    </div>
  )
}

export default AddGoalsButtons