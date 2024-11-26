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
    'https://images.pexels.com/photos/1450359/pexels-photo-1450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    'https://www.getout.pk/maldives/wp-content/uploads/2022/04/Rihiveli-Maldives-Resort-1024x682.jpg',
    'https://th.bing.com/th/id/R.fa8ffac308895e42022436b93a70dd2e?rik=KVOB%2bGlTGUzWIg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Qa6MzjnPeLM%2fURoF8H-APhI%2fAAAAAAAAApQ%2fELjMyu78v8Q%2fs1600%2fMaldives-Resorts.jpg&ehk=yrBin1%2bAnfMEU1Bu3RonckFr75AqO1%2fi60A1m60qBQs%3d&risl=&pid=ImgRaw&r=0',
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