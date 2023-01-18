import React from 'react'


function WeeklyGoals({weeklyGoals, setWeeklyGoals}) {

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
      // setWeeklyGoals(prev => {
      //   let newArr = prev.map((value, index)=> {
      //     if (value.id === id ) {
      //       return {...value, goal: 1}
      //     }
      //   })
      //   console.log(prev)
      // })
      // window.location.reload();
      setWeeklyGoals(res)
  }

  const checkNum = (num) => {
    if(num === 0) return false 
    else return true
  }

  return (
    <>
 
        <table className='table table-dark w-50'>
          <thead>
            <tr>
              <th colspan='7'>
              Weekly Goals Table 
              </th>
            </tr>
            <tr>
              <th scope='col'>Week #</th>
              <th scope='col'>Date Night</th>
              <th scope='col'>Laundry</th>
              <th scope='col'> Grocery Shopping</th>
              <th scope='col'>Vacuum</th>
              <th scope='col'>Meal Prep</th>
              <th scope='col'>Weekly Money Goal</th>
            </tr>
          </thead>
          <tbody>
            {weeklyGoals.map((value, index) => (
              <tr>
                <th scope='row'>{value.id}</th>
                <td><input checked={checkNum(value.date_night)} onClick={() => {
                                  if(value.date_night === 1) return
                                  updateGoal(value.id, 'Weekly', 'date_night')}
                  } type='radio'  /></td>
                <td><input checked={checkNum(value.laundry)} onClick={() => {
                   if(value.laundry === 1) return
                  updateGoal(value.id, 'Weekly', 'laundry')}} type='radio' /></td>
                <td><input checked={checkNum(value.grocery_shop)} onClick={() => {
                   if(value.grocery_shop === 1) return
                  updateGoal(value.id, 'Weekly', 'grocery_shop')}} type='radio' /></td>
                <td><input checked={checkNum(value.vacuum)} onClick={() => {
                   if(value.vacuum === 1) return
                  updateGoal(value.id, 'Weekly', 'vacuum')}} type='radio' /></td>
                <td><input checked={checkNum(value.meal_prep)} onClick={() => {
                   if(value.meal_prep === 1) return
                  updateGoal(value.id, 'Weekly', 'meal_prep')}} type='radio' /></td>
                <td><input checked={checkNum(value.weekly_money_goal)} onClick={() => {
                   if(value.weekly_money_goal === 1) return
                  updateGoal(value.id, 'Weekly', 'weekly_money_goal')}} type='radio' /></td>

              </tr>
            ))}


          </tbody>
        </table>
        </>
  )
}

export default WeeklyGoals