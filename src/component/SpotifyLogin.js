import React from 'react'
import {Container} from 'react-bootstrap';
// when in production change the redirect uri 
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=b983995bb5b44ca58c956e0a98f02d35&response_type=code&redirect_uri=http://localhost:3000/Spotify/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

function SpotifyLogin() {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '75vh'}}>
        <a className='btn btn-success btn-lg' href={AUTH_URL}>
            Login With Spotify
        </a>
    </Container>
  )
}

export default SpotifyLogin