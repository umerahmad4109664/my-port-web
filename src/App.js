import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Contact from './components/contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
