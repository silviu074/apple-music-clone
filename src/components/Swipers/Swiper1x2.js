import React ,{useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../../pages/Browse';
import { Navigation, Pagination } from 'swiper';
import {BsFillPlayCircleFill} from "react-icons/bs";
// import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper1x2.css'
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
            <p>{object.name}</p>
            <p>{object.artist}</p>
            </div>
          <div className= 'imageContainer'>
          <img className= 'image'src={object.imageLink}
            alt='Random cover'></img>
            {/* <div className='overlayText'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div> */}
            <div className= 'buttons'>
              <span className= 'playIconSwiper1x2' onClick={() => {handleClick(objectsInfo, index)}} >
               <BsFillPlayCircleFill size="30px"/>
              </span>
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
