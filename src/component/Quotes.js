import React, {useEffect, useState} from 'react'
import Pic from '../assets/Profile.jpg'


function Quotes() {
    const [quote, setQuote] = useState('')
    const [header, setHeader] = useState('')

    useEffect(() => {
        async function fetchQuote() {
            let res = await fetch('https://test-javswebsite.herokuapp.com/getQuote', {
                method: 'post', 
                header: {
                    'Accept' : 'application/json', 
                    'Content-Type' : 'application/json'
                }
            })
            let result = await res.json();

            if(result.msg === 'empty') {
                setHeader('Gone For The Day')
                setQuote('No Quote For Today');
            } else if(result) {
                setQuote(result[0].quote)
                setHeader(result[0].header)
            }

        }
        fetchQuote();
    })

  return (
    <div className='card w-50 h-50 m-auto mt-5 mb-5' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}>
              <img src={Pic} className='card-img-top mt-2 m-auto' style={{height: '50%', width: '50%', borderRadius: '50%'}} />
              <div className='card-body text-white pb-0 '>
                <h4 className='card-title'>Daily Quote</h4>
                {quote ? (
                    <div>
                        <h6 className='card-text'>
                            {header}
                        </h6>
                        <p className='card-text'>{quote}</p>
                
                    </div>
                ) : 'Gone Today'}
                {/* <p className='card-text'>This is where the quotes will go</p> */}
              </div>
          </div>
  )
}

export default Quotes