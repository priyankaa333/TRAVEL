import React from "react";
import "./BookTourForm.css"; 
const BookTourForm = () => {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="form-container">
        <h1>Book A Tour</h1>
        <form >
          <div className="form-group">
            
            <input type="text" id="name" placeholder="Your Name" required />
            
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <select id="tourType" required>
              <option value="">Choose an option</option>
              <option value="adventure">Adventure</option>
              <option value="romantic">Romantic</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default BookTourForm;
