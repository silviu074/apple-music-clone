import React from 'react'
import '../styles/LeftMenu.css'
import { FaApple} from "react-icons/fa";
import { FiRadio, FiClock } from "react-icons/fi";
import { BsMusicNote, BsPlayCircle } from "react-icons/bs";
import { IoMdMicrophone, IoIosAlbums } from "react-icons/io";

export const LeftMenu = () => {
  return (
    <div className='leftMenu' >
        <div className='leftMenuLogoContainer' >
            <i className='logo' ><FaApple/></i>
            <h3>Music</h3>
        </div>

        <div>

        <div>
            <i className='leftMenuIcon'><BsPlayCircle color='rgb(247, 62, 62)' /></i>
            <p>Listen Now</p>
        </div>

        <div>
            <p>Browse</p>
            </div>

        <div>
            <i className='leftMenuIcon'><FiRadio/></i>
            <p>Radio</p>
        </div>

        </div>

        <div>
            
        <div>
            <i className='leftMenuIcon'><FiClock/></i>
            <p>Recently Added</p>
        </div>

        <div>
            <i className='leftMenuIcon'><IoMdMicrophone/></i>
            <p>Artists</p>
        </div>

        <div>
            <i className='leftMenuIcon'><IoIosAlbums/></i>
            <p>Albums</p>
        </div>

        <div>
            <i className='leftMenuIcon' ><BsMusicNote/></i>
            <p>Songs</p>
        </div>


        </div>

        <div>
        <p>Open in Itunes</p>
        <p>Try beta</p>
        </div>
    </div>
  )
}
