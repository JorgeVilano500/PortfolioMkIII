import React from 'react'
import AddBlog from '../component/AddBlog';
import AddQuote from '../component/AddQuote';
import GlobalChat from '../component/GlobalChat';
import { useStateContext } from '../context/UserContext'

function LoggedInPage() {
    const {loginStatus, logout} = useStateContext();
  return (
    <div className='row '>
        
        <div className='col my-5 mx-5 justify-content-end align-self-end p-0'>
            <AddQuote />
            <AddBlog />
        
        </div>
        <div className='col mt-4'>
            <h1>Welcome back, {loginStatus}</h1>
            <button onClick={() => logout()}>Log Out</button>
        </div>
        <div className='col mt-5' style={{height: '100%'}}> 
           <GlobalChat />
        </div>
    </div>
  )
}

export default LoggedInPage