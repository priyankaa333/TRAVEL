import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trending.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Trending = () => {
  const sliderRef = useRef(null); //creates a mutable reference object

  const destinations = [
    { name: "Kerala", packages: "40+", image: "https://www.tourmyindia.com/imagess/kerala02-package.webp" },
    { name: "Sikkim", packages: "40+", image: "https://www.tourmyindia.com/imagess/sikkim01-package.webp" },
    { name: "Bhutan", packages: "20+", image: "https://www.tourmyindia.com/imagess/bhutan-package.webp" },
    { name: "Thailand", packages: "10+", image: "https://www.tourmyindia.com/imagess/thailand-package.webp" },
    { name: "Sri Lanka", packages: "10+", image: "https://www.tourmyindia.com/imagess/sikkim01-package.webp" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    dots: false, // Disable default dots
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
      <h2>Top Trending Destinations</h2>
      <a href="/tours">View All Tours</a>
      <Slider ref={sliderRef} {...settings} className="slider">
        {destinations.map((destination, index) => (
          <div key={index} className="slider-item">
            <img src={destination.image} alt={destination.name} />
            <p>{destination.packages} Packages</p>
            <h3>{destination.name}</h3>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation */}
      <div className="custom-dots">
        <i onClick={handlePrev} className="custom-arrow prev-arrow">
        <IoIosArrowBack />
        </i>

        <i onClick={handleNext} className="custom-arrow next-arrow">
        <IoIosArrowForward />
        </i>
      </div>
    </div>
  );
};

export default Trending;