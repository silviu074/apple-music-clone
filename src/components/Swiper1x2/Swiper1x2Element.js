import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
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
          <div className= 'buttons'>
            <span className= 'playIcon' >
             <BsFillPlayCircleFill size="30px"/>
            </span>
            <span className= 'moreIcon'>
              <CgMoreO size="30px"/>
            </span>
          </div>
          </div>
          
       </div>
  )
}
