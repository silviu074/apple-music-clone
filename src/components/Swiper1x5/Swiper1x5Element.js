import React, { useContext } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import '../../styles/Swiper1x5.css'
import { ObjectInfo } from './Swiper1x5';



export const Swiper1x5Element = () => {

  const info = useContext(ObjectInfo)

  return (
    <div className= 'element'>
        <div className= 'imageContainer'>
        <img className= 'image'src={info.link}
          alt='Random cover'></img>
          <div className= 'buttons'>
            <i className= 'playIcon'>
             <BsFillPlayCircleFill
                 size="30px"/>
            </i>
            <i className= 'moreIcon'>
              <CgMoreO
                 size="30px"/>
            </i>
          </div>
          </div>
          <div>
          <p>{info.playlistName}</p>
          <p>{info.playlistArtist}</p>
          </div>
       </div>
  )
}
