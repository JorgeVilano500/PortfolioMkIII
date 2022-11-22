import React, {useContext, createContext, useState, useEffect} from 'react'; 
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:3000/', 
    withCredentials: true
})

export const StateContext = createContext()
Axios.defaults.withCredentials = true;

export const UserContext = ({children}) => {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState([]);

    const [loginStatus, setLoginStatus] = useState('')

    Axios.defaults.withCredentials = true;
  
//https://test-javswebsite.herokuapp.com/register
    const register = () => {
        Axios.post('https://test-javswebsite.herokuapp.com/register', 
        {username: usernameReg, password: passwordReg}).then(response => {
            console.log(response);
            window.location.reload('/')
        })
    }

    //https://test-javswebsite.herokuapp.com/login
    const login = () => {
        Axios.post('https://test-javswebsite.herokuapp.com/login', {
            username: username, 
            password: password
        }, { withCredentials: true}).then(response => {
            if(response.data.message) {
                setLoginStatus(response.data.message)
                // window.location.reload('/')

            }  else {
                setLoginStatus(response.data[0].username)     
                window.location.reload('/')   
            }
        })
    }
//https://test-javswebsite.herokuapp.com/login
    useEffect(()=>{
        Axios.get('https://test-javswebsite.herokuapp.com/login', {withCredentials: true }).then(response => {
            console.log(response);
            if(response.data.loggedIn === true) {
                    setLoginStatus(response.data.user[0].username)
                    setUsername(response.data.user[0].username)
                    // window.location.reload('/')
            }
        })
    }, [])

    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    const logout = async () => {
        Axios.post('https://test-javswebsite.herokuapp.com/logout').then(response =>{

            if(response.data.success === true) {
                deleteAllCookies();
                setLoginStatus('');
                setLoginStatus()

            } 
        })

    }


    return (
        <StateContext.Provider
        value={{
            user, setUser,
            passwordReg, setPasswordReg, 
            usernameReg, setUsernameReg,
            register,
            username, setUsername, 
            password, setPassword,
            login,
            loginStatus, setLoginStatus,
            logout
        }}
        >
            {children}
        </StateContext.Provider>
    )



}

export const useStateContext = () => useContext(StateContext);