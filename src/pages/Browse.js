import React, {useState, useEffect} from 'react'

import { Swiper1x2 } from '../components/Swipers/Swiper1x2';
import { Swiper1x6 } from '../components/Swipers/Swiper1x6';
import { Swiper1x5small } from '../components/Swipers/Swiper1x5small';
import { Swiper2x6 } from '../components/Swipers/Swiper2x6';
import { 
  DailyTop100,
   CityCharts, 
   TimeForBed, 
   NowInSpecialAudio,
    MusicByMood,
     AppleMusicRadio, 
     Featured } from '../data';
import '../styles/MainFeed.css'

export const Context = React.createContext()

export const Browse = ({setMusicPlayerPlaylist, setMusicPlayerIndex}) => {

  const [playlist, setPlaylist] = useState([])
  const [i, setI] = useState()

  const handleClick = (objectsInfo , index) => {
    setPlaylist(objectsInfo)
    setI(index)
    
  }

  useEffect(() => {
          setMusicPlayerPlaylist(playlist)
            }, [playlist])
  
   useEffect(() => {
      setMusicPlayerIndex(i)
            }, [i])          


  return (
    <div className='mainFeedContainer' >
      <div className='mainFeed' >
      <h1>Browse</h1>
      <hr className='solid'/>

      {/*--------------------------------- Featured content --------------------------------- */}

      <h3>Today's Favourites</h3>
      <Context.Provider value={Featured} >
        <Swiper1x2 handleClick={handleClick}/>
      </Context.Provider>
      <hr className='solid'/>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>City Charts</h3>
      <Context.Provider value={CityCharts} >
        <Swiper1x6 handleClick={handleClick} />
      </Context.Provider>
      <hr className='solid'/>
    </div>


    {/*--------------------------------- Swiper 1x5 small --------------------------------- */}

    <div>
      <h3>Apple Music Radio</h3>
      <Context.Provider value={AppleMusicRadio} >
        <Swiper1x5small handleClick={handleClick}/>
      </Context.Provider>
      <hr className='solid'/>
    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Now in Special Audio</h3>
      <Context.Provider value={DailyTop100} >
        <Swiper1x6  handleClick={handleClick} />
      </Context.Provider>
      <hr className='solid'/>
    </div>

    {/*--------------------------------- Swiper 2x5 --------------------------------- */}

    <div>
      <h3>New Music</h3>
      <Context.Provider value={NowInSpecialAudio} >
        <Swiper2x6 handleClick={handleClick}/>
      </Context.Provider>
      <hr className='solid'/>
    </div>

{/*--------------------------------- Swiper 1x5 small --------------------------------- */}

<div>
      <h3>Music by Mood</h3>
      <Context.Provider value={MusicByMood} >
        <Swiper1x5small handleClick={handleClick}/>
      </Context.Provider>
      <hr className='solid'/>
    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Time for Bed</h3>
      <Context.Provider value={TimeForBed} >
        <Swiper1x6 handleClick={handleClick}/>
      </Context.Provider>
    </div>

    
    </div>
    </div>
  )
}
