import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        {/* <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
        <article className='service'>
          <div className="service-head">
            <h3>Front End Development</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Proficient in HTML5, creating well-structured and semantic markup.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Strong CSS skills, including responsive layout design and customization.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Skilled in writing clean and efficient JavaScript code</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Experienced in utilizing Bootstrap for responsive web application development.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Proficient in building dynamic user interfaces and single page applications using React.js</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service-head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service-list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
