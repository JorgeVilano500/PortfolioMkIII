import React, {useState, useEffect} from 'react'
import { DummyData } from '../assets/dummyData'
import io from 'socket.io-client'
import { useStateContext } from '../context/UserContext';

let socket;
const CONNECTION_PORT = 'https://test-javswebsite.herokuapp.com/'

function GlobalChat() {
  const {username} = useStateContext();
  // before login
  const [message, setMessage] = useState('');
  // const [messageReceived, setMessageReceived] = useState('');
  const [guestUsername, setGuestUsername] = useState('');
  const [inputUserExample, setInputUserExample] = useState('')
  const [chat, setChat] = useState({});
  const [geoLocation, setGeoLocation] = useState({
    city: '', 
    coordinates: {
      latitude: 0, 
      longitude: 0
    }
  })

  useEffect(()=> {
    if(username) {
      setGuestUsername(username);
    }
  }, [])
  
  useEffect(() => {
    console.log(username)
    socket = io(CONNECTION_PORT, {reconnection: true})
  }, [CONNECTION_PORT])

  //after login 
  // const [m, setM] = useState('')
  const [messageList, setMessageList] = useState([])


  //called whenever we get a message 
  useEffect(() => {
    socket.on('received_message', (data) => {
      // alert(data.message)
      // setMessageReceived(data.message)

      setMessageList(prev => [...prev, data]);
    })
  }, [socket])



  const sendMessage = async (e) => {
    e.preventDefault();
    let messageContent = {
      content:{message,
        guestUsername, 
        geoLocation}
    }
    await socket.emit('send_message',messageContent);
    setMessageList(prev => [...prev, messageContent.content ]);
    setMessage('')
  }

  useEffect(() => {
    async function fetchLocation() {
      try {
        let res = await fetch('https://ipapi.co/json/')
        let result = await res.json(); 
        setGeoLocation({
          city: result.city, 
          coordinates: {
            latitude: result.latitude, 
            longitude: result.longitude
          }
        })

      } catch(e) {
        console.log(e)
      }

    }
    fetchLocation();
  }, [])


  return (
    <div>
    {guestUsername ? (
      <div className='chatContainer card w-75 m-auto' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}>
        Global Chat
        <div className='messages'>
          {console.log(messageList)}
          {messageList.map((key, index) => {
            return (
              <div className='messageContainer' id={key.guestUsername == guestUsername ? 'You' : 'Other'}>
              <div className='messageIndividual'>
                 {key.message}
              </div>
                <h1>{key.guestUsername}</h1>
              </div>
            )
          })}
        </div>
        <div className='messageInputs'>
          <input type='text' placeholder='Message...' onChange={(e) => setMessage(e.target.value)} />
          <button onClick={sendMessage}>Submit Message</button>
          </div>
  
    </div>
    ) : ( 
    <div className='card w-75 h-50 m-auto' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}>
    <div className='card-header'>
      <h6>Global Chat</h6>

    </div>
    {/* need section for chat */}
   
    <div className='card-body' >
      <input type='text' placeholder='Enter Username' onChange={(e) => setInputUserExample(e.target.value)} />
        <button onClick={() => {
          setGuestUsername(inputUserExample)
        }}>Enter Username</button>
      {/* <div className='form-group'>
        <input className='input' placeholder='Full Name' />
        <label for='name' className='form-label'>Full Name</label>
      </div> */}
    </div>
  </div>)} </div>
  ) 
}

export default GlobalChat

// {/* <div className='card-header'>
//         <h6>Global Chat</h6>

//       </div>
//       {/* need section for chat */}
//       <div className='card-body overflow-auto' style={{backgroundColor: 'grey', maxHeight: '275px'}} >
//         {DummyData.map((item, index) => {
//           return (
//             <div className='card-text ' >
//                 {item.user} : {item.message} <span className='timestamp'>{item.timestamp}</span>
//               </div>
//           )
//         })}
//       </div>
//       {messageReceived}

//       {/* need section for input */}
//       <div className='card-footer' >
//         <input type='text' placeholder='Message...' onChange={(e) => setMessage(e.target.value)} />
//           <button onClick={sendMessage}>Send</button>
//         {/* <div className='form-group'>
//           <input className='input' placeholder='Full Name' />
//           <label for='name' className='form-label'>Full Name</label>
//         </div> */}
//       </div> */}