import React , { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Navigation, Pagination } from 'swiper';
import { CgMoreO } from "react-icons/cg";
import { Context } from '../../pages/Browse';
import '../../styles/Swipers/Swiper1x5small.css'
import '../../styles/MainFeed.css'
import 'swiper/css/bundle';

export const ObjectInfo = React.createContext()

export const Swiper1x5small = ({handleClick}) => {

  const objectsInfo = useContext(Context)

  let Swiper1x6ElementSmall = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
      <div className= 'Swiper1x5smallElement'>
        <div className= 'imageContainer'>
        <img className= 'image'src={object.imageLink}
          alt='Random cover'></img>
          <div className= 'buttons'>
            <span className= 'playIcon' onClick={() => {handleClick(objectsInfo, index)}}>
             <BsFillPlayCircleFill size="30px"/>
            </span>
            <span className= 'moreIcon' onClick={() => { 
                    navigator.clipboard.writeText(`${object.name} & ${object.artist}`)
                    alert(`${object.name} - ${object.artist}  was copied to clipboard`)
                    }}>
              <CgMoreO size="30px"/>
            </span>
          </div>
          </div>
          <div>
          <p>{object.name}</p>
          </div>
       </div>
       </SwiperSlide>
    )})

  return (
    <Swiper spaceBetween={20} modules={[Navigation, Pagination]} navigation
       breakpoints={{
        // if the width is >= 280 display 2 slides (mobile)
      280: {
        slidesPerView: 2,
      },
      // if the width is >= 480 display 3 slides (small tablet)
      480: {
        slidesPerView: 3,
      },
      // if the width is >= 720 display 4 slides (tablet)
      720: {
        slidesPerView: 4,
      },
      // if the width is >= 1080 display 5 slides (desktop)
      1080: {
        slidesPerView: 5,
      }
    }}>
    

    {Swiper1x6ElementSmall}

    </Swiper>
  )
}
