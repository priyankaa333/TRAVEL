import React from 'react'
import descriptionCSS from './../Home/Description.module.css'

import description_img1 from './../../Components/assets/travelport1.jpg'
import description_img2 from './../../Components/assets/travelport2.jpg'




const Description = () => {
  return (
    <div className={`${descriptionCSS.description_wrapper} section`}>
      <div className={descriptionCSS.description_content}>
        <h2>What are our Advantages</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni cupiditate voluptatum provident praesentium, sequi ullam beatae repellat fugit consequatur culpa.</p>

          <div className={descriptionCSS.description_cards}>
            <div className={descriptionCSS.description_card}>
              <div className={descriptionCSS.decription_title}>
                <i className="ri-globe-line"></i>
                <h3>Lot of Choices</h3>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, placeat!</p>
            </div>
            <div className={descriptionCSS.description_card}>
              <div className={descriptionCSS.decription_title}>
                <i className="ri-calendar-view"></i>
                <h3>Easy Booking</h3>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, placeat!</p>
            </div>
            <div className={descriptionCSS.description_card}>
              <div className={descriptionCSS.decription_title}>
                <i className="ri-map-pin-user-line"></i>
                <h3>Best Tour Guide</h3>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, placeat!</p>
            </div>
            <div className={descriptionCSS.description_card}>
              <div className={descriptionCSS.decription_title}>
                <i className="ri-hotel-bed-line"></i>
                <h3>Room Comfort</h3>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, placeat!</p>
            </div>
          </div>
      </div>
      <div className={descriptionCSS.description_image}>
        <img src={description_img1} alt="description_img" />
        <img src={description_img2} alt="description_img" />
      </div>

    </div>
  )
}

export default Description