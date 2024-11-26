import React from 'react'
import "./About.css"
import Aboutfirst from './Aboutfirst'
import Nav from '../../Components/Navbar/Nav'
import ServiceData from './../About/ServicesData'
import TeamSection from './TeamSection'
import Footer from './../../Components/Footer/Footer'
const About = () => {
  return (
   <main>
      <div className="bg"></div>

    <div className='abot'>
      <Nav/>
      <div className="a">
        <div className="a-title">About us</div>
      </div>
      <div className="a-first">
        <Aboutfirst/>
      </div>
      <div className="a-second">
        <ServiceData/>
      </div>
      <div className="a-third">
        <h1>Meet Our Team Guids</h1>
        <TeamSection/>
      </div>
      <div className="a-four">
        <Footer/>
      </div>

    </div>
      
   </main>

  )
}

export default About
