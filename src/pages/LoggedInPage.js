import React from 'react'
import AddBlog from '../component/AddBlog';
import AddQuote from '../component/AddQuote';
import GlobalChat from '../component/GlobalChat';
import AddCalendarItem from '../component/AddCalendarItem';
import { useStateContext } from '../context/UserContext'
import Clock from '../component/Clock';
import AddToKanban from '../component/AddToKanban';
import AddToMessageBoard from '../component/AddToMessageBoard';
import AddGoalsButtons from '../component/AddGoalsButtons';

function LoggedInPage() {
    const {loginStatus, logout} = useStateContext();
  return (
    <>
      {loginStatus != 'Alejandro' ? 
        <div>
          <h1>Welcome back, {loginStatus}</h1>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      : <div className='row '>
        
      <div className='col my-5 mx-5 justify-content-end align-self-end p-0'>
          <AddQuote />
          <AddBlog />
      
      </div>
      <div className='col mt-4'>
          <h1>Welcome back, {loginStatus}</h1>
          <Clock />
          <button onClick={() => logout()}>Log Out</button>
          <AddToKanban />
          <AddGoalsButtons />
      </div>
      <div className='col mt-5' style={{height: '100%'}}> 
         <GlobalChat />
         <AddCalendarItem />
         <AddToMessageBoard />
      </div>
  </div>}
  </>
    
  )
}

export default LoggedInPage