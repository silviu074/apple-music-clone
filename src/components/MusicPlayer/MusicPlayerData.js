import React from 'react'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

export const MusicPlayerData = () => {

    const [songIndex, setSongIndex] = useState(0);
  
    const songs = [
      {
        name: "Memories",
        src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
      },
      {
        name: "Creative Minds",
        src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
      },
      {
        name: "Acoustic Breeze",
        src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
      },
      {
        name: "Sunny",
        src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
      },
      {
        name: "Tenderness",
        src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
      },
      {
        name: "Once Again",
        src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
      },
      {
        name: "Sweet",
        src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
      },
      {
        name: "Love",
        src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
      },
      {
        name: "Piano Moment",
        src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
      },
      {
        name: "E.R.F",
        src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
      },
      {
        name: "Dreams",
        src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
      },
      {
        name: "A Day To Remember",
        src:
          "https://www.bensound.com/royalty-free-music/Song/a-day-to-remember-wedding-music"
      },
      {
        name: "Adventure",
        src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
      },
      {
        name: "Photo Album",
        src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
      },
      {
        name: "November",
        src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
      }
    ];
  
  
    const handleClickPrevious = () => {
      setSongIndex((currentSong) =>
        currentSong === 0 ? songs.length - 1 : currentSong - 1
      );
    };
  
    const handleClickNext = () => {
      setSongIndex((currentSong) =>
        currentSong < songs.length - 1 ? currentSong + 1 : 0
      );
      // if the current song is not the last on the playlis: play next song
      // else go back to the first song 
    };
  


  return (
    <div>
        <AudioPlayer
            style={{ borderRadius: "5px", width: "400px", height: "50px" }}
            src={songs[songIndex].src}
            showSkipControls={true}
            showJumpControls={false}
            header={`Now playing: ${songs[songIndex].name} asdsa`}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
         />
        </div>
  )
}
