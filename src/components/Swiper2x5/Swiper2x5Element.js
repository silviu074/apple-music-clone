import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper2x5.css'
import '../../styles/MainFeed.css'
import { ObjectInfo } from './Swiper2x5';
import 'swiper/css';

export const Swiper2x5Element = () => {

  const objectInfo = useContext(ObjectInfo)

  return (
    <div className= 'swiper2x5Element'>
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
          <div>
          <p>{objectInfo.Song}</p>
          <p>{objectInfo.Artist}</p>
          </div>

       </div>
  )
}
