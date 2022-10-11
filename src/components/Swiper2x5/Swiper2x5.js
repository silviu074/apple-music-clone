import React ,{useContext} from 'react'
import '../../styles/Swiper2x5.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper2x5Element} from './Swiper2x5Element'
import { Context } from '../../pages/Browse';
import 'swiper/css';

export const ObjectInfo = React.createContext()

export const Swiper2x5 = () => {

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
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[10]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[1]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[11]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[2]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[12]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[3]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[13]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[4]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[14]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[5]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[15]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[6]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[16]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[7]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[17]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[8]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[18]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>

       <SwiperSlide>
        <ObjectInfo.Provider value={objectInfo[9]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
         <ObjectInfo.Provider value={objectInfo[19]}>
          <Swiper2x5Element/>
         </ObjectInfo.Provider>
       </SwiperSlide>


    </div>
    </Swiper>
  )
}
