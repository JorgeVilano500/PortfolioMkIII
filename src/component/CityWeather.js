import React, {useState} from 'react'
import Popup from './Popup/Popup'

function CityWeather(props) {
  
  const [buttonPopup1, setButtonPopup1] = useState(false);
  return (
    <div className='card m-3' style={{width: '18rem', color: 'white', background: '#121212', borderRadius: '20px'}}>
        <img src={props.img} alt='city image' style={{width: '100%', height: '20vw', objectFit: 'cover', borderTopRightRadius: '20px', borderTopLeftRadius: '20px'}} />
        <div className='card-body'>
        <h5>{props.cityName}</h5> 
        <p>{props.farenheit }{ `\u00B0 F`} </p>
        <p>{props.conditions}</p>
        <p>Wind Speed: {props.windSpeed}mph</p>
        <button onClick={()=> setButtonPopup1(true)} type='button' class='btn-sm btn-outline-secondary btn-block '>Importance</button> <br></br>
            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1} >
                    <h1>Title: {props.title} </h1>
                    <h2>Importance: {props.importance} </h2>
            </Popup>
        </div>
    </div>
  )
}

export default CityWeather