import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
            <li >home</li>
            <li href='#explore-menu'   >menu</li>
            <li href='#app-download'   >mobile app</li>
            <li href='#footer'   >contact us</li>
        </ul>
    </div>
  )
}

export default Navbar