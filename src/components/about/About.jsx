import React from 'react'
import './About.css'
// import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/IMG-20221026-WA0032.jpg'


const About = () => {
  return (
  <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-img">
          <img src={ME} alt="about image" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
            <FaAward className='about-icon'/>
            <h5>EDUCATION</h5>
            <small>BE NED University</small>
          </article>
          <article className='about-card'>
            <FiUsers className='about-icon'/>
            <h5>EXPERIENCE</h5>
            <small>Fresher</small>
          </article>
          <article className='about-card'>
            <VscFolderLibrary className='about-icon'/>
            <h5>Projects</h5>
            <small>30+ Projects</small>
          </article>
        </div>
        <p>With an extensive understanding of front-end development principles, I bring a wealth of knowledge to create engaging user interfaces. Proficient in HTML, CSS, and JavaScript, I'm committed to delivering visually appealing and interactive websites. Let's collaborate to transform your digital vision into a captivating reality!</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About
