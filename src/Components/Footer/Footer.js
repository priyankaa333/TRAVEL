import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <h2 className="footer-logo">Travelia</h2>
        <p>Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/login.php/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/i/flow/login"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.whatsapp.com/?l=en"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/accounts/login/sandh"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/about">Our Service</a></li>
          <li><a href="/about">Terms of Service</a></li>
          <li><a href="/contact">Tour Booking Now</a></li>
        </ul>
      </div>
      <div className="footer-section contact-section">
        <h3>Get In Touch</h3>
        <p><i className="fas fa-phone-alt"></i> +01 234 567 890</p>
        <p><i className="fas fa-phone-alt"></i> +09 876 543 210</p>
        <p><i className="fas fa-envelope"></i> mailinfo00@tourm.com</p>
        <p><i className="fas fa-envelope"></i> support24@tourm.com</p>
        <p><i className="fas fa-map-marker-alt"></i> 789 Inner Lane, Holy park, California, USA</p>
      </div>
      <div className="footer-section instagram-posts">
        <h3>Instagram Post</h3>
        <div className="instagram-grid">
          <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 1" />
          <img src="https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 2" />
          <img src="https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 3" />
          <img src="https://images.pexels.com/photos/15939548/pexels-photo-15939548/free-photo-of-view-of-a-blue-domed-church-santorini-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 4" />
          <img src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 5" />
          <img src="https://th.bing.com/th/id/OIP.wfxjImAxBlmyK_eB-1dHdAHaE8?rs=1&pid=ImgDetMain" alt="Post 6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
