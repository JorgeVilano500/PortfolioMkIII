import React, {useState, useEffect} from 'react'


function DailyGoals({dailyGoals, setDailyGoals}) {
    const updateGoal = async ( id, type, goal) => {
     

        let response = await  fetch('https://test-javswebsite.herokuapp.com/updateGoals', {
          method: 'put', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
            type,
            id, 
            goal
  
          })
        })
        let res = await response.json(); 
        // console.log(res)
        // setDailyGoals(prev => {
        //   let newArr = prev.map((value, index)=> {
        //     if (value.id === id ) {
        //       return {...value, goal: 1}
        //     }
        //   })
        //   console.log(prev)
        // })
       setDailyGoals(res)
    }

    const checkNum = (num) => {
        if(num === 0) return false 
        else return true
      }

  return (
    <>
        <table className='table table-dark w-75'>
            <thead>
                <tr>
                    <th colSpan={20}>
                        Daily Goals Table
                    </th>
                </tr>
                <tr>
                    <th>Day</th>
                <th scope='col'>Wake Up 6:30</th>
                <th scope='col'>Brush Teeth (Morning)</th>
                <th scope='col'>Make Bed</th>
                <th scope='col'>Tidy Room</th>
                <th scope='col'>Vitamins/Collagen</th>
                <th scope='col'>No Phone(30 min)</th>
                <th scope='col'>Sunscreen</th>
                <th scope='col'>Sunshine (10min)</th>
                <th scope='col'>Meditation (10min)</th>
                <th scope='col'>Visualization (10min)</th>
                <th scope='col'>Train Back</th>
                <th scope='col'>Yoga</th>
                <th scope='col'>Gym</th>
                <th scope='col'>Codewars (30 min)</th>
                <th scope='col'>Codecademy (30 min)</th>
                <th scope='col'>Clean Princesses Poop</th>
                <th scope='col'>Brush Princess</th>
                <th scope='col'>Brush Teeth (Night)</th>
                <th scope='col'>Bed By 11pm</th>
                </tr>
            </thead>
            
            <tbody>
                
            {dailyGoals.map((value, index) => (
                <tr>
                <th scope='row'>{value.id}</th>
                <td>
                    <input type='radio'
                        checked={checkNum(value.wake_up_early)}
                        onClick={() =>{
                            if(value.wake_up_early === 1)return; 
                            updateGoal(value.id, 'Daily', 'wake_up_early')
                        }}
                    />
                </td> <td>
                    <input type='radio'
                        checked={checkNum(value.brush_teeth_morning)}
                        onClick={() =>{
                            if(value.brush_teeth_morning === 1)return; 
                            updateGoal(value.id, 'Daily', 'brush_teeth_morning')
                        }}
                    />
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                                                if(value.make_bed)return; 
                                                updateGoal(value.id, 'Daily', 'make_bed')
                                            }}
                    
                                            checked={checkNum(value.make_bed)}
/>
                </td>
                <td>
                    <input type='radio' 
 
                    onClick={() =>{
                        if(value.tidy_apartment === 1)return; 
                        updateGoal(value.id, 'Daily', 'tidy_apartment')
                    }}
                    checked={checkNum(value.tidy_apartment)}
/>
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.daily_vitamins)}
                        onClick={() =>{
                            if(value.daily_vitamins === 1)return; 
                            updateGoal(value.id, 'Daily', 'daily_vitamins')
                        }}
                    />
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                                                if(value.no_phone)return; 
                                                updateGoal(value.id, 'Daily', 'no_phone')
                                            }}                    
                                            checked={checkNum(value.no_phone)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                                                if(value.sunshine === 1)return; 
                                                updateGoal(value.id, 'Daily', 'sunshine')
                                            }}
                    
                                            checked={checkNum(value.sunshine)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                                                if(value.sunscreen === 1)return; 
                                                updateGoal(value.id, 'Daily', 'sunscreen')
                                            }}
                    
                                            checked={checkNum(value.sunscreen)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.meditation === 1)return; 
                            updateGoal(value.id, 'Daily', 'meditation')
                        }}

                                            checked={checkNum(value.meditation)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.visualization === 1)return; 
                            updateGoal(value.id, 'Daily', 'visualization')
                        }}

                                            checked={checkNum(value.visualization)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.train === 1)return; 
                            updateGoal(value.id, 'Daily', 'train')
                        }}

                                            checked={checkNum(value.train)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.yoga === 1)return; 
                            updateGoal(value.id, 'Daily', 'yoga')
                        }}

                                            checked={checkNum(value.yoga)}
/>
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.gym === 1)return; 
                            updateGoal(value.id, 'Daily', 'gym')
                        }}

                                            checked={checkNum(value.gym)}
/>
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.codewars)}
                        onClick={() =>{
                            if(value.codewars === 1)return; 
                            updateGoal(value.id, 'Daily', 'codewars')
                        }}
                    />
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.codecademy)}
                        onClick={() =>{
                            if(value.codecademy === 1)return; 
                            updateGoal(value.id, 'Daily', 'codecademy')
                        }}
                    />
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.princess_poop)}
                        onClick={() =>{
                            if(value.princess_poop === 1)return; 
                            updateGoal(value.id, 'Daily', 'princess_poop')
                        }}
                    />
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.princess_brush)}
                        onClick={() =>{
                            if(value.princess_brush === 1)return; 
                            updateGoal(value.id, 'Daily', 'princess_brush')
                        }}
                    />
                </td>
                <td>
                    <input type='radio'
                        checked={checkNum(value.brush_teeth_night)}
                        onClick={() =>{
                            if(value.brush_teeth_night === 1)return; 
                            updateGoal(value.id, 'Daily', 'brush_teeth_night')
                        }}
                    />
                </td>
                <td>
                    <input type='radio' 
                                            onClick={() =>{
                            if(value.bed_early === 1)return; 
                            updateGoal(value.id, 'Daily', 'bed_early')
                        }}

                                            checked={checkNum(value.bed_early)}
/>
                </td>

            </tr>
            ))}
      
            </tbody>
              
 

        </table>
    </>
  )
}

export default DailyGoals
// can create a table where it is the weekdays or a table where it counts the last 7 days of the array
{/* <tr>
<th colSpan={1} scope='col'>
    <td>Monday</td>
</th>
</tr>
<tr>
<th colSpan={1} scope='col'>
    <td>Tuesday</td>
</th>
</tr><tr>
<th colSpan={1} scope='col'>
    <td>Wednesday</td>
</th>
</tr><tr>
<th colSpan={1} scope='col'>
    <td>Thursday</td>
</th>
</tr><tr>
<th colSpan={1}  scope='col'>
    <td>Friday</td>
</th>
</tr><tr>
<th colSpan={1} scope='col'>
    <td>Saturday</td>
</th>
</tr><tr>
<th colSpan={1} scope='col'>
    <td>Sunday</td>
</th>
</tr> */}