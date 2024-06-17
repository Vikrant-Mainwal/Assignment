import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      
  return (
    <div className='navbar'>
        <div className="hamburger" onClick={toggleMenu}>{isMenuOpen?<CloseIcon/>:<MenuIcon/>}</div>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li >home</li>
            <li href='#explore-menu'   >menu</li>
            <li href='#app-download'   >mobile app</li>
            <li href='#footer'   >contact us</li>
        </ul>
    </div>
  )
}

export default Navbar