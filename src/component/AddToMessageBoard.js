import React, {useEffect, useState} from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

function AddToMessageBoard() {
    const [header, setHeader] = useState('')
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    // logic to setup correct date
    let day = new Date().toISOString().slice(0, 10);
    const [date, setDay] = useState(day);
    console.log(day)

    async function sendEmail(e) {
        let response = await fetch('https://test-javswebsite.herokuapp.com/sendLizEmail', {
            method: 'post', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                message, 
                header, 
                messageType
            })
        })
        let res = await response.json();
        e.preventDefault()
    }
    
    async function addToMessages() {
        if (messageType === '' || header === '' || message === '') return window.alert('Hey Remember to fill out everything')

        let response = await fetch('https://test-javswebsite.herokuapp.com/addToList', {
            method: 'put', 
            headers : {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                header, 
                message, 
                messageType, 
                date
            })
        })
        await sendEmail();
        let res = await response.json();


    }




  return (
    <div>
        <h3>Send a Message To Liz</h3>
        <div className='row d-flex justify-content-center'>
            <InputField 
                type='text'
                placeholder='Message Header'
                value={header ? header : ''}
                onChange={e => setHeader(e.target.value)}
            
            />
            <InputField 
                type='text'
                placeholder='Something cute?'
                value={message ? message : ''}
                onChange={e => setMessage(e.target.value)}
            />

            {/* Select type of the message you would like to display */}
            <select style={{maxWidth: '150px'}} onClick={(e) => setMessageType(e.target.value)} name='message'>
                <option value=''>Choose the Type of Message</option>
                <option value='Poem'>Poem</option>
                <option value='Message'>Message</option>
                <option value='Haiku'>Haiku</option>
                <option value='Submliminal'>Subliminal</option>

            </select>


        </div>
        <div className='row d-flex justify-content-center'>
           <SubmitButton
            text='Add Message'
            disabled={false}
            onClick={addToMessages}
           
           />
        </div>
    </div>
  )
}

export default AddToMessageBoard