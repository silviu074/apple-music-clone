import React from 'react'
import '../styles/LeftMenu.css'
import { FaApple} from "react-icons/fa";
import { FiRadio, FiClock } from "react-icons/fi";
import { SiItunes } from "react-icons/si";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsMusicNote, BsPlayCircle } from "react-icons/bs";
import { IoMdMicrophone, IoIosAlbums } from "react-icons/io";
import { IconContext } from 'react-icons';

export const LeftMenu = () => {
  return (
    <div className='leftMenu' >

        {/*--------------------------------- LeftMenu top container --------------------------------- */}

        <div>
        <div className='logoContainer' >
            <i className='logo' ><FaApple size='25px' /></i>
            <p >Music</p>
        </div>
        <input type='text' placeholder='Search' ></input>
        </div>

        {/*--------------------------------- LeftMenu main container --------------------------------- */}

        <IconContext.Provider value={{color:'rgb(247, 62, 62)'}}>
        
        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><BsPlayCircle /></i>
            <p>Listen Now</p>
        </div>

        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><AiOutlineUnorderedList/></i>
            <p>Browse</p>
        </div>

        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><FiRadio/></i>
            <p>Radio</p>
        </div>

          <h5>Library</h5>  

        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><FiClock/></i>
            <p>Recently Added</p>
        </div>

        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><IoMdMicrophone/></i>
            <p>Artists</p>
        </div>

        <div className='iconTextContainer'>
            <i className='leftMenuIcon'><IoIosAlbums/></i>
            <p>Albums</p>
        </div>

        <div className='iconTextContainer'>
            <i className='leftMenuIcon' ><BsMusicNote/></i>
            <p>Songs</p>
        </div>
        </IconContext.Provider>

        {/*--------------------------------- LeftMenu bottom container --------------------------------- */}

        <div className='bottomContainer' >
        <div className='iconTextContainer'>
            <i className='leftMenuIcon' ><SiItunes/></i>
            <p>Open in Itunes</p>
        </div>
        <div className='iconTextContainer'>
            <i className='leftMenuIcon' ><SiItunes/></i>
            <p>Try beta</p>
        </div>
        </div>
        
    </div>
  )
}
