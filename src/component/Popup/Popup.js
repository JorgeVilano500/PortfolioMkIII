import React from 'react'
import './Popup.css'


function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <button onClick={() => {props.setTrigger(false)}} id='close-btn' className='btn-primary' style={{borderRadius: '20px'}} >Close</button>
     
        {props.children}
      </div>
    </div>
  ) :'';
}

export default Popup