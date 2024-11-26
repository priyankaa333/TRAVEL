import React from "react";
import "./Holidays.css";

const interests = [
  { title: "Beach Tours", image: "https://www.fodors.com/wp-content/uploads/2018/10/shutterstock_294262202.jpg" },
  { title: "Ayurveda Tours", image: "https://cdn.pixabay.com/photo/2023/08/29/18/24/ai-generated-8221927_960_720.png" },
  { title: "Special Interest Tours", image: "https://live.staticflickr.com/392/19907597836_f8fa968bc7.jpg" },
  { title: "Wildlife Tours", image: "https://images.pexels.com/photos/11536788/pexels-photo-11536788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const Holidays = () => {
  return (
    <div className="holiday">
      <div className="header">
        <h2>Holidays by Interest</h2>
        <a href="/tours" className="view-all">View Tours </a>
      </div>
      <div className="cart-grid">
        {interests.map((interest, index) => (
          <div className="cart" key={index}>
            <img src={interest.image} alt={interest.title} className="cart-image" />
            <div className="cart-overlay">
              <p>{interest.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
