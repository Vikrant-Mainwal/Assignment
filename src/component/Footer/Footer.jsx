import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
    <div className='footer-content' id='footer-content'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium dicta nesciunt vel, porro esse, aliquid assumenda doloribus ea reiciendis sunt explicabo, suscipit consectetur pariatur.</p>
           
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
            <li>+1-212-321-4321</li>
            <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
        
    </div>
  )
}

export default Footer