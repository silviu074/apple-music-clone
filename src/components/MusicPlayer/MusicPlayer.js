import React, {useContext} from 'react'
import { Context } from '../../pages/Browse';
import 'react-h5-audio-player/lib/styles.css';
import '../../styles/MusicPlayer.css'
import { MusicPlayerData } from './MusicPlayerData';

export const MusicPlayer = ({playlist,i}) => {

  const objectInfo = useContext(Context)
  console.log(playlist)
  console.log(i)


  return (
    <div className='musicPlayerContainer' >
        <MusicPlayerData/>
    </div>
  )
}
