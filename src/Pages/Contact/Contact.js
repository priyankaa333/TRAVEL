import React from 'react'
import './Contact.css'
import Nav from '../../Components/Navbar/Nav'
import Contactfirst from './Contactfirst'
import BookTourForm from './BookTourForm'
import Footer from '../../Components/Footer/Footer'
const Conatct = () => {
  return (
    <main>
      <div className="bgim"></div>
      <div className='cnct'>
        <Nav/>
        <div className="cnct-head">
          <h1 className='cnct-title'>Contact</h1>
        </div>
        <div className="c-first">
          <Contactfirst/>
        </div>
        <div className="c-second">
          <BookTourForm/>
        </div>
        <div className="t-third">
          <Footer/>
        </div>
      </div>

    </main>

  )
}

export default Conatct