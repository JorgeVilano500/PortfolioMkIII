import React from 'react';
import {useStateContext} from '../context/UserContext';

const Register = () => {
    const {
        usernameReg, setUsernameReg,
        passwordReg, setPasswordReg,
        register
    } = useStateContext();
    
  return (
    <div className='registration'>
        <h1>Register For Account</h1>
        <label>Username</label>
        <input type='text' onChange={(e) => setUsernameReg(e.target.value)} />
        <label>Password</label>
        <input type='text' onChange={(e) => setPasswordReg(e.target.value)} />
        <button onClick={register} >Register</button>
    </div>
  )
}

export default Register