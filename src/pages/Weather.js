import React, {useEffect, useState} from 'react';
// import WeatherList from '../../components/WeatherList.js'
import SF from '../assets/cities/SF.jpg'
import Sac from '../assets/cities/Sac.jpg'
import UCD from '../assets/cities/UCD.jpg'
import Hayward from '../assets/cities/Hayward.jpg'
import Rich from '../assets/cities/Rich.jpg'
import StL from '../assets/cities/StLou.jpg'
import Tokyo from '../assets/cities/Tokyo.jpg'
import CityWeather from '../component/CityWeather'
import Thailand from '../assets/cities/Thailand.jpg'
import Dubai from '../assets/cities/Dubai.jpg'

let cities = [
    {
        city: 'San Francisco',
        country: 'us',
        img: SF,
        title: 'Frisco', 
        importance: `I have always lived across the bay from the city and would always see the lights coming from there when I was at miller knox. I have always been careful going there because its the actual city but lately I have been exploring more.`
    },
    {
        city: 'Sacramento',
        country: 'us',
        img: Sac,
        title: 'Sac Town', 
        importance: `I live next to sac state at the moment of writing this and I have always not liked the area because of the weather but it does remind me of the bay area in some ways. Just because I live there it's my own domain and I love being out there because I'm on my own`
    },
    {
        city: 'Davis', 
        country: 'us',
        img: UCD,
        title: 'Cow Town', 
        importance: `I love this university, even though I went through a rough time at the beginning I'm starting to find the beauty in the town. Other than the cow shit you can smell, there is definitely a lot to have there especially with the people you meet there. I changed a lot being there. `
    },
    {
        city: 'Hayward', 
        country: 'us', 
        img: Hayward,
        title: 'Sisters House', 
        importance: `My sister lives here and I lived with her for a while there. It was during a bad time and I don't know I really wish I could've stayed longer because my relationship with Brenda was going downhill after that.`
    },
    {
        city: 'St. Louis', 
        country: 'us',
        img: StL,
        
        title: 'St. Louie', 
        importance: `I have a close friend that lives out there. I always wanted to visit her and be able to explore out there. But it's a republican state, I'm undocumented, it's just a bad Idea overall. `
    },
    {
        city: 'Richmond', 
        country: 'us',
        img: Rich,
        
        title: 'Rich City', 
        importance: `Raised in the city of the Rich. I can't forget my roots being there because it's how I learned about the world atleast the beginning. I can't forget the memories I have there and the shit I did there. However I don't think I'm gonna be visiting anytime soon...`
    },
    {
        city: 'Tokyo', 
        country: 'jp',
        img: Tokyo,
        
        title: 'Onii-chan', 
        importance: `Honestly want to travel here because of the anime, food, culture. There's a lot to learn from Japanese culture and I sometimes wish I was born over there sometimes. But I will be there one day eventually.`
    },

    {
        city: 'Bangkok', 
        country: 'th',
        img: Thailand, 
        
        title: 'Hangover 2', 
        importance: `Idk I thought about how cheap the vacation would be and how beautiful the nature is there. However I also think about the hangover 2 movie when they went to bangkok. It was fucking wild and I can't imagine having a true adventure there without any limits.`
    },
    
    {
      city: 'Dubai', 
      country: 'ae',
      img: Dubai,
      
      title: 'Oil City', 
      importance: `Built on the money they got from oil companies, this city is beautiful. Even though the culture is a bit strict on woman and rightfully so, I will visit one day because I want to explore more than what I already have.`
  },
  
]


let cityWeather = []
function WeatherPage(props) { 
    const [cityWeather, setCityWeather] = useState([])

    


    const [city, setCity] = useState(''); // need to have city set in this page by itself
    const [coordinates, setCoordinates] = useState({// same with coordinates
        latitude: 0, 
        longitude: 0, 
    })
    const [conditions, setConditions] = useState({
        celsius: 0, 
        farenheit: 0, 
        cond: ''
    })
    useEffect( async ()=> {
      
        try { 
                for  (let i=0; i< cities.length; i++) {
                
                const APIkey = 'd3ac75ca0f59c9b9d3f6960f7e2adba8';
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cities[i].city},${cities[i].country}&appid=${APIkey}`
                let res = await fetch(url);
                let result = await res.json();
                setCityWeather(oldArray => [...oldArray, result]);
            }

            }
            catch(e) {
                console.log(e)
            }
        
        
    }, [])

    useEffect(async () => {
        try {
            // const url = 'https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_fmRlPlSghziKGGoe6G0UmOi9ifkw9';
 let url2 = 'https://ipapi.co/json/'
 let res = await fetch(url2)
 let result = await res.json();
            setCity(result.city)
            setCoordinates({
                latitude: result.latitude, 
                longitude: result.longitude
            })
 
}
catch(e) {
   console.log(e)
}
try {
    //const lat = 38.554975842542035;
   // const lon = -121.41680655316057;
    //let latitude; 
    const APIkey = 'd3ac75ca0f59c9b9d3f6960f7e2adba8';
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${APIkey}`;
   // let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${APIkey}`
    //`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8`
    // test api call 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8';
    /*fetch(url)
    .then(response=> response.json())
    .then(data => console.log(data));*/
     let res = await fetch(url);
 
      let result = await res.json();
 
     setConditions({
         farenheit: FarenheitConverter(result.main.temp),
         celsius: celsiusConverter(result.main.temp),
         cond: splitAndCapitalize(result.weather[0].description)
     })
 
 
 
    }  
 
   catch(e) {
     console.log('Not sure the error');

   }  

   

    }, [])
    function FarenheitConverter(kel) { //converts kelvin to celsius
        let Faren = ((kel - 273.15)*9/5) + 32
        return Math.round(Faren);
    
      }
       function celsiusConverter(kel) {//converts kelvin to celsius 
        let cel = kel - 273.15;
        return Math.round(cel)
       }
    
       function splitAndCapitalize(arr) {//splits words in array and capitalizes first letter of each word

        let firstArr = [arr];
      let finalString = [];
      const splitString = firstArr[0].split(" ");
      for (let i =0; i < splitString.length ; i++)  {
         let  newString = splitString[i];
              let capitalLetter = newString[0].toUpperCase();
              console.log(splitString)
              let str = newString.split('')
              let newstr = [];
           for(let j=0; j< newString.length; j++)  {
                //  console.log(newString)
                  newstr.push(str[j])
                  
                  
              }
              newstr.shift();
              newstr.unshift(capitalLetter)
              let finalstr = newstr.join('')
              finalString.push(finalstr);
             // console.log(finalstr)
      }
         // console.log(finalString)
          let fs = finalString.join(' ');
          console.log(fs)
         return fs;
  
     }


  return (
    <div>
        <div className='row justify-content-center align-items-center'>
            <div className='col-12'>
                
             <h1>Current Location - {city}: {conditions.farenheit} - {conditions.cond}</h1>
            
                <h1>Alejandro's List of Important Cities</h1>
                </div>
        </div>
            <div className='container d-inline-flex'>
            <div className='row'>
                
                 {cityWeather && cityWeather.map((item, index)=>(
                   
                   <div className='col'>
                     
                      
                             <CityWeather
                             cityName={item.name}
                             farenheit={FarenheitConverter(item.main.temp)}
                              conditions={splitAndCapitalize(item.weather[0].description)}
                              img={cities[index].img}
                              windSpeed={item.wind.speed}
                              title={cities[index].title}
                              importance={cities[index].importance}
                             />
                        
                       
                 </div>
                 ))}
                 {
                     console.log(cityWeather)
                 }
    
               
    </div>
          </div>
    </div>
  )
}

export default WeatherPage

{/**
<div>
                <div id="carouselExampleControls" class="carousel slide h-50 m-5" data-bs-ride="carousel" style={{width: '400px', backgroundColor: '#FB948F'}}>
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{backgroundSize: 'cover'}}>
      <img src={props.img1} class="d-block w-100" alt="image 1"/>
    </div>
    <div class="carousel-item" style={{backgroundSize: 'cover'}}>
      <img src={props.img2} class="d-block w-100" alt="image 2"/>
    </div>
    <div class="carousel-item" style={{backgroundSize: 'cover'}}>
      <img src={props.img3} class="d-block w-100" alt="image 3"/>
    </div>
    
    <div class="carousel-item"  style={{backgroundSize: 'cover'}}>
      <img src={props.img4} class="d-block w-100" alt="image 4"/>
    </div>
    <div class="carousel-item" style={{backgroundSize: 'cover'}}>
      <img src={props.img5} class="d-block w-100" alt="image 5"/>
    </div>
    <div class="carousel-item" style={{backgroundSize: 'cover'}}>
      <img src={props.img6} class="d-block w-100" alt="image 6"/>
    </div>
    <div class="carousel-item" style={{backgroundSize: 'cover'}} >
      <img src={props.img7} class="d-block  w-100" alt="image 7"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div> */}