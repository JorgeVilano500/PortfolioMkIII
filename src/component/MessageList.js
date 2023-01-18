import React, {useEffect, useState} from 'react'
import MessageCard from './MessageCard'
import {useStateContext} from '../context/UserContext';
import HaikuCard from './HaikuCard';


function MessageList() {
    const {username} = useStateContext();

    const [poems, setPoems] = useState([])
    const [message, setMessage] = useState([])
    const [haiku, setHaiku] = useState([])
    const [subliminal, setSubliminal] = useState([])

    useEffect(() => {
        if (username !== 'Liz') return;
        async function fetchMessageList() {
            // remember to create backend route for this and mysql table for it. 
        let response =  await fetch('https://test-javswebsite.herokuapp.com/messageList', {
            method: 'post', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        let res = await response.json();

        setPoems(res.filter(el => {return el.messageType === 'Poem'}))
        setHaiku(res.filter(el => {return el.messageType === 'Haiku'}))
        setSubliminal(res.filter(el => {return el.messageType === 'Subliminal'}))

        
        setMessage(res.filter(el => {return el.messageType ==='Message'}))
        }
        fetchMessageList();

    }, [username])
    

  return (

   <div>
            {username !== 'Liz' ? <>
            <h1>This page is not for you</h1>
            </> :  <div>
            <h1>Messages/Poems For Liz</h1>

                <div className='d-flex m-2'>

            {message.map((item, index) => (
                <MessageCard
                // should add item individually for the cards
                title={item.messageHeader}
                message={item.message}
                messageType={item.messageType}
                date={item.dateListed}
                />
                ) )}
                <br></br>
                 {haiku.map((item, index) => (
                <HaikuCard
                // should add item individually for the cards
                title={item.messageHeader}
                message={item.message}
                messageType={item.messageType}
                date={item.dateListed}
                />
                ) )}
                </div>

        </div>}

       
   </div>
  )
}

export default MessageList