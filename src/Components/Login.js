import React from 'react'
import { loginURL } from '../spotify'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        {/* Spotify Logo */}
        {/* <h2>Welcome to Spotify</h2> */}
        <img src='https://cdn-icons-png.flaticon.com/512/2111/2111627.png' 
            alt='Spotify Logo'></img>
        <a href={loginURL}>LOGIN TO HEAR</a>
    </div>
  )
}

export default Login


//  12811f59a12f48c5ad7e462cfb0e3175