import React ,{useContext} from 'react'
import 'swiper/css/bundle';
import '../../styles/Swiper1x5.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper1x5Element} from './Swiper1x5Element'
import { Context } from '../../pages/Browse';
import { Navigation, Pagination } from 'swiper';


export const ObjectInfo = React.createContext()

export const Swiper1x5 = () => {

  const objectInfo = useContext(Context)

  return (
    <Swiper spaceBetween={20}  modules={[Navigation, Pagination]} navigation
       breakpoints={{
        // if the width is >= 280 display 5 slides (mobile)
      280: {
        slidesPerView: 2,
      },
      // if the width is >= 480 display 5 slides (small tablet)
      480: {
        slidesPerView: 3,
      },
      // if the width is >= 720 display 5 slides (tablet)
      720: {
        slidesPerView: 4,
      },
      // if the width is >= 1080 display 5 slides (desktop)
      1080: {
        slidesPerView: 5,
      }
    }}>
    <div>

      <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[0]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[1]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[2]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[3]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[4]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[5]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[6]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[7]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[8]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[9]}>
          <Swiper1x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>


    </div>
    </Swiper>
  )
}
