import React, {useState, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import { FaApple } from "react-icons/fa";
import 'react-h5-audio-player/lib/styles.css';
import '../styles/MusicPlayer.css'

export const MusicPlayer = ({musicPlayerPlaylist,musicPlayerIndex}) => {

  const [songs, setSongs] = useState([])
  const [songIndex, setSongIndex] = useState(0)
  
  useEffect(() => {
       setSongs(musicPlayerPlaylist)
  }, [musicPlayerPlaylist])

  useEffect(() => {
    setSongIndex(musicPlayerIndex)
  }, [musicPlayerIndex])

console.log(songs[songIndex])

  const handleClickPrevious = () => {
    setSongIndex((currentSong) =>
      currentSong === 0 ? songs.length - 1 : currentSong - 1
    );
  };
  // if the current song is not the first on the playlist: play previous song
  // else go to last song {songs[songs.length-1]}

  const handleClickNext = () => {
    setSongIndex((currentSong) =>
      currentSong < songs.length - 1 ? currentSong + 1 : 0
    );
    // if the current song is not the last on the playlis: play next song
    // else go back to the first {songs[0]}
  };

  function header(songs, songIndex){
    if(typeof(songIndex) === 'undefined') {
      return <i><FaApple size='25px'/></i>
    }
    else return(<div className='songsContianer'>
      <div className='songTitle' >{songs[songIndex]?.name}</div>
      <div className='songArtist' >{songs[songIndex]?.artist}</div>
    </div>)
}
// `${songs[songIndex]?.name} - ${songs[songIndex]?.artist}`
  return (
    <div className='musicPlayerContainer' >
      
         <AudioPlayer
            src={songs[songIndex]?.src}
            showSkipControls={true}
            showJumpControls={false}
            header={header(songs, songIndex)}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
         />


        </div>
  )
}
