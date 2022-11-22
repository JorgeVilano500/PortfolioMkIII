import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Axios from 'axios'
// import { registerLicense } from '@syncfusion/ej2-base';

// registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGJWeUx0RWFbb1p6d1NMZVRBJAtUQF1hS39Tdk1iX3tecnJcQ2Be');

Axios.defaults.withCredentials = true;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render()    

ReactDOM.render(
    <BrowserRouter> 
    <UserContext>
        <App />
    </UserContext> 
    </BrowserRouter>,
    document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
