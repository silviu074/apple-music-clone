import React from 'react'
import '../styles/MainFeed.css'
import { Swiper1x5 } from '../components/Swiper1x5';


export const Browse = () => {
  
  return (
    <div className='mainFeed' >
      <h1>Browse</h1>
      <hr className='solid'/>

      {/*--------------------------------- Featured content --------------------------------- */}

        <div className='featured' >
            <div>
              <p>Updated Playlist</p>
              <h3>A-List Pop</h3>
              <p>Apple music Pop</p>
            </div>
            <div>
              <p>Updated Playlist</p>
              <h3>A-List Pop</h3>
              <p>Apple music Pop</p>
            </div>
        </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>You Gotta hear</h3>
      <hr className='solid'/>
      <Swiper1x5/>

    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Now in special audio</h3>
      <hr className='solid'/>
      <Swiper1x5/>
    </div>

    {/*--------------------------------- Swiper 2x5 --------------------------------- */}

    <div>
      <h3>New Music</h3>
      <hr className='solid'/>
    </div>

    {/*--------------------------------- Swiper 1x4 --------------------------------- */}

    <div>
      <h3>Apple Music Radio</h3>
      <hr className='solid'/>
    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Essentials</h3>
      <hr className='solid'/>
      <Swiper1x5/>
    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Hit the gym</h3>
      <hr className='solid'/>
      <Swiper1x5/>
    </div>

    {/*--------------------------------- Swiper 1x4 --------------------------------- */}

    <div>
      <h3>Music by Mood</h3>
      <hr className='solid'/>
    </div>

    </div>
  )
}
