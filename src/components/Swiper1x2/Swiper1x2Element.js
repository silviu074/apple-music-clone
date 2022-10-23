import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import '../../styles/Swiper1x2.css'
import '../../styles/MainFeed.css'
import { ObjectInfo } from './Swiper1x2';
import 'swiper/css';

export const Swiper1x2Element = () => {

  const objectInfo = useContext(ObjectInfo)

  return (
    <div className= 'Swiper1x2Element'>
        <div>
          <p>{objectInfo.albumStatus}</p>
          <p>{objectInfo.albumName}</p>
          <p>{objectInfo.albumArtist}</p>
          </div>
        <div className= 'imageContainer'>
        <img className= 'image'src={objectInfo.link}
          alt='Random cover'></img>
          <div className='overlayText'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className= 'buttons'>
            <span className= 'playIconSwiper1x2' >
             <BsFillPlayCircleFill size="30px"/>
            </span>
          </div>
          </div>
          
       </div>
  )
}
