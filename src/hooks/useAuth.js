import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('https://test-javswebsite.herokuapp.com/SpotifyLogin', {
            code
        }).then(res => {
            // console.log(res.data) // returns 
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, '/Spotify')
        }).catch(() => {
            window.location = '/Spotify'
        })
        
    }, [code])
    
    useEffect(() => {
        axios.post('https://test-javswebsite.herokuapp.com/refresh', {
            refreshToken
        }).then(res => {
            // console.log(res.data) // returns 
            // setAccessToken(res.data.accessToken)
            // setRefreshToken(res.data.refreshToken)
            // setExpiresIn(res.data.expiresIn);
            // window.history.pushState({}, null, '/')
        }).catch(() => {
            window.location = '/Spotify'
        })
    }, [refreshToken, expiresIn])

    
    return accessToken
}