import React from 'react'
import {DummyData} from '../assets/dummyData';
import dapp from '../assets/dappexample.png'
import momsEx from '../assets/momswebsite.png'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/UserContext';
import Quotes from '../component/Quotes';
import GlobalChat from '../component/GlobalChat';
import Clock from '../component/Clock';

function LandingPage() {
  const { loginStatus } = useStateContext();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-6 col-xxl-4 col-lg-6 col-md-12 m-0 p-0 mb-5 h-75 '>
          {/* <h1>Daily Quotes + Global Chat</h1> */}
            <Quotes />
            {/* <GlobalChat /> */}
        </div>
        <div className='col-xl-6 col-xxl-4 col-lg-6 col-md-12  m-0 p-0 align-self-center align-items-center justify-content-center mt-5' >
          {/* <h1>Main Board... Maybe some animation</h1> */}
          <div className='text-white m-auto'>
              
              {loginStatus ? (<div>
                <h1>Hello {loginStatus}</h1>
                <Clock />
              </div>) : (
                <div>
                  <h3 >Welcome To My Site, spend some Time here</h3>
                  <Clock />
                  </div>                
              )}
              <h5 className='my-5'>Take a Look Around And Email Me For Inquiries</h5>
              </div>
          {/* Carousel  */}
          <div className='carousel slide text-white' data-bs-ride='carousel' id='carouselExampleControls' style={{maxwidth: '600px', height: '100%'}}>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <h1>Personal Minting Dapp</h1>
                <a href='https://javastudiosdapp.netlify.app/' target='_blank'><img src={dapp} className='d-block w-100' /> </a>
              </div>
              <div className='carousel-item'>
                <h1>Mom's Ecommerce Site</h1>
                <a href='https://aidastest.herokuapp.com/' target='_blank'><img src={momsEx} className='d-block w-100' /></a>
              </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className='col-xl-12 col-xxl-4 col-lg-12 col-md-12 mt-xl-5 mt-lg-5 mt-md-5'>
          <div className='card text-white w-50 h-25 m-auto mt-5 mb-5 align-self-center align-items-center' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}> 
              <h3 className='card-header'>Weather</h3>
              <p>Local Temp: city + temp </p>
              <Link to='/Weather' className='btn btn-secondary w-50'>Check More</Link>
          </div>
          {/* <div className='card text-white w-50 h-25 m-auto mt-5 mb-5 align-self-center align-items-center' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}> 
              <h3 className='card-header'>Recommend Songs</h3>
              <p>Add to My Spotify Playlist </p>
              <Link to='/Spotify' className='btn btn-secondary w-50'>Check More</Link>
          </div> */}
          <div className='card text-white w-50 h-25 m-auto mt-5 mb-5 align-self-center align-items-center' style={{backgroundColor: 'rgba( 255, 255, 255, 0.18 )'}}> 
              <h3 className='card-header'>Social Media</h3>
              <p>Follow Me & Send Crypto</p>
              <Link to='/Media' className='btn btn-secondary w-50'>Check More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage