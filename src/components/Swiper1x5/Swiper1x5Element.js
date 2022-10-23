import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper1x5.css'
import '../../styles/MainFeed.css'
import { ObjectInfo } from './Swiper1x5';

export const Swiper1x5Element = () => {

  const objectInfo = useContext(ObjectInfo)

  return (
    <div className= 'swiper1x5Element'>
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
          <p>{objectInfo.playlistName}</p>
          <p>{objectInfo.playlistArtist}</p>
          </div>
       </div>
  )
}
