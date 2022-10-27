import React , {useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../../pages/Browse';
import { Navigation, Pagination } from 'swiper';
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper1x5.css'
import '../../styles/MainFeed.css'
import 'swiper/css/bundle';


export const Swiper1x5 = ({handleClick}) => {

  const objectsInfo = useContext(Context)

// Here we go thru the {Playlist / List of songs} passed from the main component
// and render each {Playlist[i] / List of songs[i]} inside a SwiperSlide

  let Swiper1x5Element = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
         <div className= 'swiper1x5Element'>
           <div className= 'imageContainer'>
             <img className= 'image'src={object.link}
                   alt='Random cover'></img>
              <div className= 'buttons'>
              <span className= 'playIcon' >
               <BsFillPlayCircleFill size="30px" onClick={() => {handleClick(objectsInfo, index)}}/>
              </span>
              <span className= 'moreIcon' onClick={() => { 
                    navigator.clipboard.writeText(`${object.name} & ${object.artist}`)
                    alert(`${object.name} & ${object.artist}  was copied to clipboard`)
                    }}>
              <CgMoreO size="30px"/>
              </span>
              </div>
            </div>
           <div>
           <p>{object.name}</p>
           <p>{object.artist}</p>
           </div>
       </div>
       </SwiperSlide>)
  })


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
          {Swiper1x5Element}
  
    </Swiper>
  )
}
