import React, { useRef } from 'react'
import '../styles/LeftMenu.css'
import { FaApple, FaTimes, FaBars } from "react-icons/fa";
import { FiRadio, FiClock } from "react-icons/fi";
import { SiItunes } from "react-icons/si";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsMusicNote, BsPlayCircle } from "react-icons/bs";
import { IoMdMicrophone, IoIosAlbums } from "react-icons/io";
import { IconContext } from 'react-icons';

export const LeftMenu = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <div className='leftMenu' >


        {/*--------------------------------- LeftMenu main container --------------------------------- */}

       
        

        <header>
            
        <nav ref={navRef}>

        <a href='/' className='logoContainer' >
            <i className='logo' ><FaApple size='30px' />Music</i>
        </a>

        <IconContext.Provider value={{color:'rgb(247, 62, 62)'}}  >
        
        <a href='/listen-now' className='iconTextContainer'>
            <i className='leftMenuIcon'><BsPlayCircle size="20px"/>ㅤListen Now</i>
            
        </a>

        <a href='/browse' className='iconTextContainer'>
            <i className='leftMenuIcon'><AiOutlineUnorderedList size="20px"/>ㅤBrowse</i>
            
        </a>

        <a href='/radio' className='iconTextContainer'>
            <i className='leftMenuIcon'><FiRadio size="20px"/>ㅤRadio</i>
            
        </a>

          <h5 className='mobile-invisible' >Library</h5>  

          <a href='/recently-added' className='iconTextContainer'>
            <i className='leftMenuIcon'><FiClock size="20px"/> ㅤRecently Added</i>
            
        </a>

        <a href='/artists' className='iconTextContainer'>
            <i className='leftMenuIcon'><IoMdMicrophone size="20px"/>ㅤArtists</i>
            
        </a>

        <a href='/albums' className='iconTextContainer'>
            <i className='leftMenuIcon'><IoIosAlbums size="20px"/>ㅤAlbums</i>
            
        </a>

        <a href='/songs' className='iconTextContainer'>
            <i className='leftMenuIcon' ><BsMusicNote size="20px"/>ㅤSongs</i>
            
        </a>
        </IconContext.Provider>



        {/*--------------------------------- LeftMenu bottom container --------------------------------- */}

        <div className='bottomContainer mobile-invisible' >
        <IconContext.Provider value={{color:'rgb(247, 62, 62)'}} >
        <a href='/' className='iconTextContainer'>
            <i className='leftMenuIcon' ><SiItunes size="20px"/>ㅤOpen in Itunes</i>
            
        </a>
        <a href='/' className='iconTextContainer'>
            <i className='leftMenuIcon' ><SiItunes size="20px"/>ㅤTry beta</i>
            
        </a>
        </IconContext.Provider>
        </div>
      
        <button className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

        </nav>
        <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            </header>  
        
    </div>
  )
}
