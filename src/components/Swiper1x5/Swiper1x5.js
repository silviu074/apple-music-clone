import React from 'react'
import '../../styles/Swiper1x5.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper1x5Element} from './Swiper1x5Element'

export const ObjectInfo = React.createContext()

export const Swiper1x5 = () => {

  let objectInfo1 = {
    playlistName: 'Playlist #1',
    playlistArtist: 'Playlist Artist #1',
    link: 'https://source.unsplash.com/random/300x300/?Music&1'
  }

  let objectInfo2 = {
    playlistName: 'Playlist #2',
    playlistArtist: 'Playlist Artist #2',
    link: 'https://source.unsplash.com/random/300x300/?Music&2'
  }

  return (
    <Swiper spaceBetween={20} slidesPerView={5}>
    <div>

      <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo1}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo2}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

    </div>
    </Swiper>
  )
}
