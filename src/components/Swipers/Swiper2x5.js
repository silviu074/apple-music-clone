import React , { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Context } from '../../pages/Browse';
import '../../styles/Swipers/Swiper2x5.css'
import '../../styles/MainFeed.css'
import 'swiper/css/bundle';


export const Swiper2x5 = ({handleClick}) => {

  const objectsInfo = useContext(Context)

  let swiper2x5Element=[]
  let halfLengthofObject=Math.round(objectsInfo.length/2)

  function generateElement(i){
    return(
    <div className= 'swiper2x5Element'>
          <div className= 'imageContainer'>
          <img className= 'image'src={objectsInfo[i].imageLink}
            alt='Random cover'></img>
            <div className= 'buttons'>
              <span className= 'playIcon' onClick={() => {handleClick(objectsInfo, i)}}>
              <BsFillPlayCircleFill size="30px"/>
              </span>
              <span className= 'moreIcon' onClick={() => { 
                      navigator.clipboard.writeText(`${objectsInfo[i].name} & ${objectsInfo[i].artist}`)
                      alert(`${objectsInfo[i].name} - ${objectsInfo[i].artist}  was copied to clipboard`)
                      }}>
                <CgMoreO size="30px"/>
              </span>
            </div>
            </div>
            <div>
            <p>{objectsInfo[i].name}</p>
            <p>{objectsInfo[i].artist}</p>
            </div>
        </div>)
  }

  for(let i=0; i<halfLengthofObject; i++){
    let j=halfLengthofObject +i
    swiper2x5Element[i] =
        <SwiperSlide key={i}>
          {generateElement(i)}
          {generateElement(j)}
        </SwiperSlide>
  }

  return (
    <Swiper spaceBetween={20}  modules={[Navigation, Pagination]} navigation
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
      // if the width is >= 1080 display 5 slides (tablet)
      1080: {
        slidesPerView: 5,
      },
      // if the width is >= 1366 display 6 slides (desktop)
      1366: {
        slidesPerView: 6,
      }
    }}>
      {swiper2x5Element}
    </Swiper>
  )
}
