import React from 'react'
import HaikuBg from '../assets/haikubg.jpg'

function HaikuCard({title, message, messageType, date}) {
  return (
    <div className='card haiku' style={{width: '18rem', opacity: '0.8'}}>
            <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{messageType} : {date.slice(0, 10)}</h6>
        <p class="card-text" style={{background: '#fff', borderRadius: '10%'}}>{message}</p>
    </div>
    </div>
  )
}

export default HaikuCard