import React, {useState, useEffect} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import '../../styles/MusicPlayer.css'
import AudioPlayer from 'react-h5-audio-player';
import { MusicPlayerEmpty } from '../datatest';

export const MusicPlayer = ({musicPlayerPlaylist,musicPlayerIndex}) => {

  const [songs, setSongs] = useState(MusicPlayerEmpty)
  const [songIndex, setSongIndex] = useState(0)
  

  // const updateSong = () => {
  //   setSongs(musicPlayerPlaylist)
  //   setSongIndex(musicPlayerIndex)
  // }

  // useEffect(() => {
  //   updateSong()
  // }, [musicPlayerPlaylist, musicPlayerIndex])
  
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

  return (
    <div className='musicPlayerContainer' >
      
         <AudioPlayer
            style={{ borderRadius: "5px", width: "400px", height: "50px" }}
            src={songs[songIndex]?.src}
            showSkipControls={true}
            showJumpControls={false}
            header={`Now playing: ${songs[songIndex]?.name} by ${songs[songIndex]?.artist}`}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
         />


        </div>
  )
}
