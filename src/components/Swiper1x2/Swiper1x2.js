import React ,{useContext} from 'react'
import '../../styles/Swiper1x2.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper1x2Element} from './Swiper1x2Element'
import { Context } from '../../pages/Browse';
import 'swiper/css';

export const ObjectInfo = React.createContext()

export const Swiper1x2 = () => {

  const objectInfo = useContext(Context)

  return (
    <Swiper spaceBetween={20}
       breakpoints={{
        // if the width is >= 280 display 5 slides (mobile)
      280: {
        slidesPerView: 2,
      },
      // if the width is >= 480 display 5 slides (small tablet)
      480: {
        slidesPerView: 2,
      },
      // if the width is >= 720 display 5 slides (tablet)
      720: {
        slidesPerView: 2,
      },
      // if the width is >= 1080 display 5 slides (desktop)
      1080: {
        slidesPerView: 2,
      }
    }}>
    <div>

      <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[0]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[1]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[2]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[3]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[4]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[5]}>
          <Swiper1x2Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>


    </div>
    </Swiper>
  )
}
