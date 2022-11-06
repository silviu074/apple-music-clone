import React from 'react'
import '../styles/InProgress.css'

export const InProgress = () => {
  return (
    <div className='inProgressTextContainer'>
        <p className='inProgressText' >The goal of this project was to make a music player that was as comparable 
            to Apple Music as possible. I did not want to duplicate the whole application.</p>

        <p className='inProgressText'>The Browse page (which doubles as the main page) contains all of its functional content.</p>

        <p className='inProgressText'>In case I decide to develop this project in the future, the pages "Listen Now", "Radio",
             "Recently Added", "Artists", "Albums", and "Songs" serve as a useful navigation menu.</p>    
    </div>
  )
}
