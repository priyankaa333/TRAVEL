import Nav from '../../Components/Navbar/Nav'
import React, { useState, useEffect } from 'react';
import './Home.css'
import Memories from './../../Pages/Home/Memories'
import Description from './Description';
import Trending from './Trending';
import Video from './Video';
import Packages from './Pakages';
import TravelStories from './TravelStories';
import Testimonials from './Testimonials';
import FourSlides from './FourSlides';
import Conect from './Conect';
import Footer from '../../Components/Footer/Footer';
const images = [
    'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg', 
    'https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_1280.jpg',
    'https://images.pexels.com/photos/2155749/pexels-photo-2155749.jpeg',
  ];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 5 seconds interval
      return () => clearInterval(interval);
    }, []);//ensures the effect runs once after the component is mounted.
  return (
    <main>
      <div className="background-slider">        
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}      
      </div>
        <div className='one'>
            <Nav/>
            <div className="main">
                <h1>Your Journey Your Story</h1>
                <h4>Choose Your Favorite Destination</h4>
                <a href="/about">Visit Us</a>
            </div>
            <div className="images">
            <Memories/>
            </div>
            <div className='dis'>
              <Description/>           
            </div>
            <div className="trend">
              <Trending/>
            </div>
            <div className="vide">
              <Video/>
            </div>
            <div className="pack">
              <h1 id='head'>International Holiday Pckages</h1>
              <a href="/tours" id='heade'>View Tours</a>
              <Packages/>
            </div>
            <div className="slid">
              <TravelStories/>
            </div>
            <div className="testmoney">
              <Testimonials/>
            </div>
            <div className="connect">
              <Conect/>
            </div>

            <div className="four-images">
              <FourSlides/>
            </div>

            <div className="footer-section">
              <Footer/>
            </div>

        </div>

    </main>
  
      

    
  )
}

export default Home