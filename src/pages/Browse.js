import React, {useState, useEffect} from 'react'

import { Swiper1x2 } from '../components/Swipers/Swiper1x2';
import { Swiper1x5 } from '../components/Swipers/Swiper1x5';
import { Swiper1x5small } from '../components/Swipers/Swiper1x5small';
import { Swiper2x5 } from '../components/Swipers/Swiper2x5';
import { 
  NowInSpecialAudio,
   YouGottaHear, 
   HitTheGym, 
   NewMusic,
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

      <h3>Today's Hits</h3>
      <Context.Provider value={Featured} >
        <Swiper1x2 handleClick={handleClick}/>
      </Context.Provider>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>You Gotta hear</h3>
      <hr className='solid'/>
      <Context.Provider value={YouGottaHear} >
        <Swiper1x5 handleClick={handleClick} />
      </Context.Provider>

    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Now in special audio</h3>
      <hr className='solid'/>
      <Context.Provider value={NowInSpecialAudio} >
        <Swiper1x5  handleClick={handleClick} />
      </Context.Provider>
    </div>

    {/*--------------------------------- Swiper 2x5 --------------------------------- */}

    <div>
      <h3>New Music</h3>
      <hr className='solid'/>
      <Context.Provider value={NewMusic} >
        <Swiper2x5 handleClick={handleClick}/>
      </Context.Provider>
    </div>

    {/*--------------------------------- Swiper 1x5 small --------------------------------- */}

    <div>
      <h3>Apple Music Radio</h3>
      <hr className='solid'/>
      <Context.Provider value={AppleMusicRadio} >
        <Swiper1x5small handleClick={handleClick}/>
      </Context.Provider>
    </div>

    {/*--------------------------------- Swiper 1x5 --------------------------------- */}

    <div>
      <h3>Hit the gym</h3>
      <hr className='solid'/>
      <Context.Provider value={HitTheGym} >
        <Swiper1x5 handleClick={handleClick}/>
      </Context.Provider>
    </div>

    {/*--------------------------------- Swiper 1x5 small --------------------------------- */}

    <div>
      <h3>Music by Mood</h3>
      <hr className='solid'/>
      <Context.Provider value={MusicByMood} >
        <Swiper1x5small handleClick={handleClick}/>
      </Context.Provider>
    </div>
    </div>
    </div>
  )
}
