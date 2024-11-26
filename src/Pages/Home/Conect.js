import React from 'react'
import "./Conect.css"
const Conect = () => {
  return (
    <div className='conect'>
        <h2>Want a Trip, don't know Correct Pakage?</h2>
        <form className="contact-form">
          <input type="email" placeholder="Your email" required />
          <button type="submit">
            Contact Us
          </button>
        </form>
    </div>
  )
}

export default Conect