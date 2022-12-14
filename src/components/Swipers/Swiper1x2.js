import React , { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../../pages/Browse';
import { Navigation, Pagination } from 'swiper';
import { BsFillPlayCircleFill } from "react-icons/bs";
import '../../styles/Swipers/Swiper1x2.css'
import '../../styles/MainFeed.css'
import 'swiper/css/bundle';

export const Swiper1x2 = ({handleClick}) => {

  const objectsInfo = useContext(Context)

  let swiper1x2Element = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
        <div className= 'Swiper1x2Element'>
        <div>
            <p>{object.status}</p>
            <p>{object.name} - {object.artist}</p>
            </div>
          <div className= 'imageContainer'>
          <img className= 'image'src={object.imageLink}
            alt='Random cover'></img>
            <div className= 'buttons'>
              <span className= 'playIconSwiper1x2' onClick={() => {handleClick(objectsInfo, index)}} >
               <BsFillPlayCircleFill size="30px"/>
              </span>
            </div>
            <div className='overlayText'>
            <p>{object.description}</p>
            </div>
            </div>
         </div>
         </SwiperSlide>)
    })

  return (
    <Swiper modules={[Navigation, Pagination]} spaceBetween={20} navigation slidesPerView={2}>
      {swiper1x2Element}
    </Swiper>
  )
}
