import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer-logo'></a>
    <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer-socials">
        <a href=""><FaFacebookF/></a>
        <a href=""><FiInstagram/></a>
        <a href=""><IoLogoTwitter/></a>
    </div>
    <div className="footer-copyright">
        <small>&copy; Muhammad Umer Khan. All rights reserved</small>
    </div>
   </footer>
  )
}
export default Footer
