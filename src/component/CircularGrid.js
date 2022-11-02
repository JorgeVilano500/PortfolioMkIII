import React from 'react';
import MomsWebsite from '../assets/momswebsite.png';
import IG from '../assets/Instagram.png'
import Dapp from '../assets/CryptoDapp.png'
import Github from '../assets/Github.png'
import { Link } from 'react-router-dom';

function CircularGrid() {
  return (
    // can put a function where it sends the user to the next page by redirecting them. 
    <div className='gallery'>
        <img src={MomsWebsite} onClick={()=> window.open('https://aidastest.herokuapp.com/', '_blank')}  /> 
        <img src={IG} onClick={()=> window.open('https://www.instagram.com/java_nft_studios/', '_blank')} />
        <img src={Dapp} onClick={()=> window.open('https://keen-lebkuchen-973cb5.netlify.app/', '_blank')} />
        <img src={Github} onClick={()=> window.open('https://github.com/', '_blank')} />

    </div>
  )
}

export default CircularGrid