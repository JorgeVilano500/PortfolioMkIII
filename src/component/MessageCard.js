import React from 'react'

function MessageCard({title, message, messageType, date}) {
  return (
    <div class="card" style={{width: '18rem', background: '#0f7a2b', opacity: '0.8'}}>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{messageType} : {date.slice(0, 10)}</h6>
    <p class="card-text">{message}</p>
  </div>
</div>
  )
}

export default MessageCard