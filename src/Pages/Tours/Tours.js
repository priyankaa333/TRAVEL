import React from 'react'
import './Tours.css'
import Nav from '../../Components/Navbar/Nav'
import Toursfirst from './Toursfirst'
import Holidays from './Holidays'
import Footer from '../../Components/Footer/Footer'
import Packages from '../Home/Pakages'
import TravelStories from '../Home/TravelStories'
const Tours = () => {
  return (
    <main>
      <div className="bgi">
        
      </div>
      <div className='tours'> 
        <Nav/>
        <div className="tours-heading">
          <h1 className='tours-title'>Tours</h1>
        </div>
        <div className="t-first">
          <Toursfirst/>
        </div>
        <div className="t-second">
          <TravelStories/>
        </div>
        <div className="t-third">
          <Holidays/>
        </div>
        <div className="t-four">
          <h1>Internatinal Hloidays tours</h1>
          <a href="/tours">View tours</a>
          <Packages/>
        </div>
        <div className="t-five">
          <Footer/>
        </div>
      </div>
    </main>

  )
}

export default Tours