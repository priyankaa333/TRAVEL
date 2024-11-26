import React from 'react'
import './Contactfirst.css'
const Contactfirst = () => {
  return (
  <section class="contact-info">
    <div class="contact-header">
      <h2>Get In Touch</h2>
      <h3>Our Contact Information</h3>
    </div>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="content">
          <h4>Our Address</h4>
          <p>2690 Hiltona Street Victoria Road, New York, Canada</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="icon">
          <i class="fas fa-phone-alt"></i>
        </div>
        <div class="content">
          <h4>Phone Number</h4>
          <p>+01 234 567 890<br/>+09 876 543 210</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="content">
          <h4>Email Address</h4>
          <p>mailinfo00@travelia.com<br/>support24@travelia.com</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Contactfirst