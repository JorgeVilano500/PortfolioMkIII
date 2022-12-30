import React from 'react'
import {useStateContext} from '../context/UserContext';
import LoggedInPage from './LoggedInPage';

function Login() {
    const {
        username, setUsername, 
        password, setPassword,
        login,
        loginStatus, setLoginStatus,
        logout
    } = useStateContext();
  return (
    <div className='login'>
       

        

        {loginStatus === 'Wrong password/username' ? (
          <>
          <h1>Wrong password/username</h1>
           <div>
             <h1>Login For Account</h1>
              <label>Username</label>
              <input type='text' onChange={(e) => setUsername(e.target.value)} />
              <label>Password</label>
              <input type='password' onChange={(e) => setPassword(e.target.value)} />
              <button onClick={login}>Login</button>
          </div>
          {setLoginStatus('')}
          </>
          ) : loginStatus ? 
          
          <LoggedInPage /> : 
        (
          <div>
             <h1>Login For Account</h1>
              <label>Username</label>
              <input type='text' onChange={(e) => setUsername(e.target.value)} />
              <label>Password</label>
              <input type='password' onChange={(e) => setPassword(e.target.value)} />
              <button onClick={login}>Login</button>
          </div>
        )}
        
    </div>
  )
}

export default Login