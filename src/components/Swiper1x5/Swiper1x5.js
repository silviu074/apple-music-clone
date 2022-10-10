import React ,{useContext} from 'react'
import '../../styles/Swiper1x5.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper1x5Element} from './Swiper1x5Element'
import { BrowserContext } from '../../pages/Browse';

export const ObjectInfo = React.createContext()

export const Swiper1x5 = () => {

  const info = useContext(BrowserContext)

  return (
    <Swiper spaceBetween={20} slidesPerView={5}>
    <div>

      <SwiperSlide>
        <ObjectInfo.Provider value={info[0]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={info[1]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

    </div>
    </Swiper>
  )
}
