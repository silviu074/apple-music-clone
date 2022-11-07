import React from 'react'
import '../styles/MainFeed.css'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='footerContainer' >
        <div className='footerText' >
            <p className='inlineElement'>Copyright @ 2022</p>
            <a href='/' className='linkStyle'> Apple Inc.</a>
            <p className='inlineElement'>All rights reserved.</p><br/></div>
        <div className='footerText2' >    
            <a href='/'  className='linkStyle'> Internet Service Terms</a>
            <a href='/'  className='linkStyle'> Apple Music & Privacy</a>
            <a href='/'  className='linkStyle'> Cookie Warning</a>
            <a href='/'  className='linkStyle'> Support</a>
            <a href='/'  className='linkStyle'> Feedback</a>

        </div>
    </div>
  )
}
