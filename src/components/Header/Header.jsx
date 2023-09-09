import React from 'react'
import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import Headersocials from './Headersocials'
import Profile from '../../assets/profile.png'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Umer Khan</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          <img src={Profile} alt="" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
