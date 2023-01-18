import React, {useEffect, useState} from 'react'
import DailyGoals from '../component/DailyGoals'
import WeeklyGoals from '../component/WeeklyGoals'



function Goals() {
  const [weeklyGoals, setWeeklyGoals] = useState([]);
  const [goals, setGoals] = useState([]);
  async function fetchDailyGoals() {
    let response2 = await fetch('https://test-javswebsite.herokuapp.com/dailyGoals', {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }
    })
    let res2 = await response2.json()
    // console.log(res2)
    setGoals(res2)
    // console.log(goals)
  }
  useEffect(()=> {
    fetchDailyGoals()
    
    async function fetchWeeklyGoals() {
      let response = await fetch('https://test-javswebsite.herokuapp.com/weeklyGoals',
      {
        method: 'post', 
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        }
      }
      )

      let res = await response.json() 
      // console.log(res)
      setWeeklyGoals(res)
    } 
    fetchWeeklyGoals();
   
  
  }, [])


  return (
    <div className='d-flex align-items-center justify-content-center row' >
          <DailyGoals 
            dailyGoals={goals}
            setDailyGoals={setGoals}
          />
      <div className="w-100"></div>
      {/* <div className='col '> */}
         
          <WeeklyGoals 
            weeklyGoals={weeklyGoals}
            setWeeklyGoals={setWeeklyGoals}
          />
      {/* </div> */}
    </div>
  )
}

export default Goals

// lets start with weekly goals
// 1. I will create a new table every week, for now manually. 
//2. This will keep track of certain goals I wanna get done. 
// 3. Check list will consist of true/false 
//4. The table will continue to go down the list every week with new additions to the table every week