import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper1x5small.css'
import '../../styles/MainFeed.css'
import { ObjectInfo } from './Swiper1x5small';
import 'swiper/css';

export const Swiper1x5smallElement = () => {

  const objectInfo = useContext(ObjectInfo)

  return (
    <div className= 'Swiper1x5smallElement'>
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
          <p>{objectInfo.name}</p>
          </div>
       </div>
  )
}
