import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import SpotifyLogin from '../component/SpotifyLogin'
import Dashboard from '../component/Dashboard'


function Spotify() {
    let code = new URLSearchParams(window.location.search).get('code') // will get us the parameter code from the url 
  return code ? <Dashboard code={code} /> : <SpotifyLogin />
}

export default Spotify