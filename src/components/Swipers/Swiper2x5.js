import React ,{useContext} from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Context } from '../../pages/Browse';
import '../../styles/Swiper2x5.css'
import '../../styles/MainFeed.css'
import 'swiper/css/bundle';

export const ObjectInfo = React.createContext()

export const Swiper2x5 = ({handleClick}) => {

  const objectsInfo = useContext(Context)



  let swiper2x5ElementTop = objectsInfo.filter((object, index) => index < objectsInfo.length/2).map( (object, index) => {
    return(
      <div className= 'swiper2x5Element'>
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
          <p>{object.artist}</p>
          </div>
       </div>)})

let swiper2x5ElementBottom = objectsInfo.filter((object, index) => index > objectsInfo.length/2).map( (object, index) => {
  return(
    <div className= 'swiper2x5Element'>
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
        <p>{object.artist}</p>
        </div>
     </div>)})




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
    
    </Swiper>
  )
}
