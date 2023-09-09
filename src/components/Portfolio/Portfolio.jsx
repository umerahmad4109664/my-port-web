import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
    {
        id:1,
        image:IMG1,
        title:`MTJ Clone Website`,
        github:'https://github.com/umerahmad4109664/MTJ-clone.github.io',
        demo:'https://umerahmad4109664.github.io/MTJ-clone.github.io/'
    },
    {
        id:2,
        image:IMG2,
        title:`Yotube Clone Website`,
        github:'https://github.com/umerahmad4109664/youtube-clone',
        demo:'https://clone-911d5.web.app/'
    },
    {
        id:3,
        image:IMG3,
        title:`E-Commerce`,
        github:'https://github.com/umerahmad4109664/e-commerce',
        demo:'https://umerahmad4109664.github.io/e-commerce.github.io/'
    },
    {
        id:4,
        image:IMG4,
        title:`Portfolio Old`,
        github:'https://github.com/umerahmad4109664/my-portmolio',
        demo:'https://umerahmad4109664.github.io/my-portmolio/'
    },
    {
        id:5,
        image:IMG5,
        title:`Event Management Website`,
        github:'',
        demo:''
    },
    {
        id:6,
        image:IMG6,
        title:`Login Page`,
        github:'',
        demo:''
    }
]

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio-container">
       {
        data.map(({id,image,title,github,demo}) =>{
            return(
                <article key={id} className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                <a href={github} className='btn'target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
        })
       }
        
        
    </div>
   </section>
  )
}

export default Portfolio
